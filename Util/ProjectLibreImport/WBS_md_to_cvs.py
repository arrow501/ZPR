import re
import csv

def parse_markdown_wbs(text):
    tasks = []
    current_id = 1
    
    # Split into lines and process each line
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Count the heading level by number of # symbols
        heading_match = re.match(r'^(#{1,5})\s*', line)
        if heading_match:
            # Extract the task name, removing various markdown formatting
            task_name = line[len(heading_match.group(0)):]  # Remove heading markers
            task_name = re.sub(r'\{#[\w\.-]+\}', '', task_name)  # Remove anchor tags
            task_name = re.sub(r'\*\*', '', task_name)  # Remove bold markers
            task_name = re.sub(r'\\', '', task_name)  # Remove escape characters
            
            # Extract the task number if it exists (e.g., "1.2.3.")
            number_match = re.match(r'^([0-9.]+)', task_name)
            if number_match:
                outline_number = number_match.group(1).rstrip('.')
                task_name = task_name[len(number_match.group(0)):].strip()
                # Combine outline number and name
                combined_name = f"{outline_number}. {task_name}"
            else:
                combined_name = task_name
            
            if combined_name:  # Only add if there's actually a task name
                tasks.append({
                    'ID': current_id,
                    'Name': combined_name,
                    'Duration': '1d'
                })
                current_id += 1
    
    return tasks

def write_project_libre_csv(tasks, output_file):
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['ID', 'Name', 'Duration']
        writer = csv.DictWriter(f, fieldnames=fieldnames)  # Removed delimiter='\t'
        writer.writeheader()
        writer.writerows(tasks)

# Main execution
if __name__ == "__main__":
    try:
        # Read the input file
        with open('wbs.md', 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Parse and convert
        tasks = parse_markdown_wbs(content)
        
        # Write the output
        write_project_libre_csv(tasks, 'project_libre_import.csv')
        
        print(f"Successfully processed {len(tasks)} tasks")
        print("Output saved to project_libre_import.csv")
        
    except FileNotFoundError:
        print("Error: Could not find wbs.md file in the current directory")
    except Exception as e:
        print(f"An error occurred: {str(e)}")