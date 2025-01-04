import React from "react";
import { MapPin, Moon, ArrowLeft, Send, DollarSign } from "lucide-react";

const ChatInterface = () => {
  const primaryColor = "#F46119";

  const ChatHeader = ({ isLostPerson }) => (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-4">
        <ArrowLeft className="w-6 h-6" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">iPhone 13 with flamingo case</h2>
          </div>
          <p className="text-sm text-gray-500">Found near Warsaw Center</p>
        </div>
      </div>
      {isLostPerson && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Reward offered</span>
            <span className="font-bold text-[#F46119]">200 PLN</span>
          </div>
        </div>
      )}
    </div>
  );

  const Message = ({ text, isSent, time }) => (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl p-3 ${
          isSent ? "bg-[#F46119] text-white" : "bg-gray-100"
        }`}
      >
        <p>{text}</p>
        <p className="text-xs mt-1 opacity-70">{time}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen p-8">
      <div className="flex gap-4 w-full max-w-4xl mx-auto">
        {/* Lost Person's View */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col">
          <ChatHeader isLostPerson={true} />
          <div className="flex-1 h-[400px] bg-white p-4 overflow-y-auto">
            <Message
              text="Hi! I found your iPhone. It's safe with me."
              isSent={false}
              time="2:30 PM"
            />
            <Message
              text="Thank you so much! I was really worried. Can we meet to get it back?"
              isSent={true}
              time="2:31 PM"
            />
            <Message
              text="Of course! I'm available this evening near Warsaw Central."
              isSent={false}
              time="2:33 PM"
            />
          </div>
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#F46119]"
              />
              <button className="p-3 rounded-lg bg-[#F46119] hover:bg-[#F46119]/80 transition-colors">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Finder's View */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg overflow-hidden">
          <ChatHeader isLostPerson={false} />
          <div className="p-4 border-b border-gray-200">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-3">Set Reward Amount</h3>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-2 border border-gray-200 rounded"
                  defaultValue="200"
                />
              </div>
              <button
                className="w-full py-2 text-white rounded-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Confirm Reward
              </button>
            </div>
          </div>
          <div className="h-[400px] bg-white p-4 overflow-y-auto">
            <Message
              text="Hi! I found your iPhone. It's safe with me."
              isSent={true}
              time="2:30 PM"
            />
            <Message
              text="Thank you so much! I was really worried. Can we meet to get it back?"
              isSent={false}
              time="2:31 PM"
            />
            <Message
              text="Of course! I'm available this evening near Warsaw Central."
              isSent={true}
              time="2:33 PM"
            />
          </div>
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-3 rounded-lg border border-gray-200 focus:outline-none"
              />
              <button
                className="p-3 rounded-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
