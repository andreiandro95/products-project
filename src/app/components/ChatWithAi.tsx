"use client"

import { Input } from '@/components/ui/input';
import React, { useState } from 'react'

const ChatWithAi = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e:React.FormEvent<EventTarget>) => {
      e.preventDefault();
      setLoading(true);
      setResponse("");
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        });
        const data = await res.json();
        console.log(data.success)
        if (res.ok) {
          setResponse(data.success);
        } else {
          setResponse(`Error: ${data.error}`);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center gap-1'>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          
        />
        <button
          type="submit"
          disabled={loading}
          style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
        >
          {loading ? "Loading..." : "Send"}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: "2rem", whiteSpace: "pre-wrap" }}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ChatWithAi