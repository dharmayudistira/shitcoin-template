'use client';

import { Message as PreviewMessage } from '@/app/chatbot/_components/message';
import type { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MultimodalInput } from './multimodal-input';

export function Chat({
  id,
  initialMessages,
  selectedModelId
}: {
  id: string;
  initialMessages: Message[];
  selectedModelId: string;
}) {
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop
  } = useChat({
    body: { id, modelId: selectedModelId },
    initialMessages
  });

  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatContainerRef]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const visibleMessages = messages;

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <div className='absolute inset-0 bg-contain bg-center bg-no-repeat'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='relative mx-auto flex h-full w-full flex-col'>
            <Link
              href='/'
              className={`absolute right-[20px] top-[20px] cursor-pointer`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-x'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </Link>
            <div
              ref={chatContainerRef}
              className='scrollbar-hide flex-1 overflow-y-auto bg-white p-4 pt-[60px] shadow-xl'
            >
              <PreviewMessage
                key={''}
                role={'assistant'}
                content={
                  'Hello, and welcome! I’m Lino, here to guide you with patience and care. Whatever brings you here today, let’s take it one step at a time. Life can feel like a puzzle, but together, we can make it all a little clearer. Don’t hesitate to reach out – we’re in this journey together, and I’m excited to help you discover something new. Let’s begin!'
                }
                attachments={[]}
                toolInvocations={[]}
              />
              {visibleMessages.map((message) => (
                <PreviewMessage
                  key={message.id}
                  role={message.role}
                  content={message.content}
                  attachments={message.experimental_attachments}
                  toolInvocations={message.toolInvocations}
                />
              ))}
            </div>

            <div className='w-full bg-[#F8F8F8] px-[20px] py-[18px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.10)]'>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 sm:flex-row'
              >
                <MultimodalInput
                  className='text-base focus:ring-[#A165D7]'
                  input={input}
                  setInput={setInput}
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                  stop={stop}
                  attachments={attachments}
                  setAttachments={setAttachments}
                  messages={messages}
                  setMessages={setMessages}
                  append={append}
                />
                <button
                  type='submit'
                  className='rounded-2xl border bg-[#A165D7] px-4 py-[10px]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#FFFFFF'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-send'
                  >
                    <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z' />
                    <path d='m21.854 2.147-10.94 10.939' />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
