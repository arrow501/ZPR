import re
import csv


def parse_markdown_wbs(text):
    tasks = []
    current_id = 1

    # Split into lines and process each one
    lines = text.split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Count the heading level by number of # symbols
        heading_match = re.match(r'^(#{1,4})\s*', line)
        if heading_match:
            level = len(heading_match.group(1))

            # Extract the task name, removing various markdown formatting
            task_name = line[len(heading_match.group(0)):]  # Remove heading markers
            task_name = re.sub(r'\{#[\w\.-]+\}', '', task_name)  # Remove anchor tags
            task_name = re.sub(r'\*\*', '', task_name)  # Remove bold markers
            task_name = re.sub(r'\\', '', task_name)  # Remove escape characters

            # Extract the task number if it exists (e.g., "1.2.3.")
            number_match = re.match(r'^([0-9.]+)', task_name)
            if number_match:
                task_number = number_match.group(1).rstrip('.')
                task_name = task_name[len(number_match.group(0)):].strip()
            else:
                task_number = ''

            # Create task dictionary
            task = {
                'ID': current_id,
                'OutlineNumber': task_number,
                'Name': task_name,
                'Level': level,
                'Duration': '1d',  # Default duration
                'Start': '',  # These can be set in ProjectLibre
                'Finish': '',
                'Predecessors': ''
            }

            tasks.append(task)
            current_id += 1

    return tasks


def write_project_libre_csv(tasks, output_file):
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        fieldnames = ['ID', 'OutlineNumber', 'Name', 'Level', 'Duration', 'Start', 'Finish', 'Predecessors']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(tasks)


def convert_markdown_wbs_to_csv(input_text, output_file):
    """
    Main function to convert markdown WBS to ProjectLibre CSV format

    Args:
        input_text (str): The markdown WBS content
        output_file (str): Path to save the CSV file
    """
    tasks = parse_markdown_wbs(input_text)
    write_project_libre_csv(tasks, output_file)
    return len(tasks)  # Return number of tasks processed


# Example usage
sample_text = """# **1. ANALIZA** {#1.-analiza}
## **1.1. Analiza wymagań funkcjonalnych** {#1.1.-analiza-wymagań-funkcjonalnych}
### **1.1.1. Analiza procesów zgłaszania zgub**
### **1.1.2. Analiza procesów zgłaszania znalezisk**"""

# Process the sample
num_tasks = convert_markdown_wbs_to_csv(sample_text, 'project_libre_import.csv')
print(f"Processed {num_tasks} tasks successfully")