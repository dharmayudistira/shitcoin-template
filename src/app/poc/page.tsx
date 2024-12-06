import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';

export default function Page() {
  return (
    <main className='w-full h-full bg-yellow-500'>
      <Header />

      {/* Content */}
      <div className='container pt-20'>
        <div className='flex w-full justify-start text-xl mb-10'>
          Back to Home
        </div>

        <p className='text-5xl text-center mb-14'>Proof of Concept</p>

        {/* Title */}
        <p className='text-2xl text-start'>Coin - The Seeker of Insights</p>
        <p>Last update: 12/03/2024</p>

        <div className={`h-[1px] w-full bg-[#0000003D] my-[40px]`}></div>

        {/* Core Concept */}
        <p className='text-3xl mb-5'>Core Concept</p>
        <p className='mb-8'>
          Boby is an AI experience designed to simplify the complexities of
          modern life with wisdom, humor, and charm. Born from the Restful
          Realm, Boby offers users a calming escape from the digital chaos,
          transforming overwhelming thoughts into manageable insights. Boby
          encourages reflection, relaxation, and growth through interactive,
          easy-to-understand dialogues.
        </p>

        {/* Technical Implementation */}
        <p className='text-3xl mb-5'>Technical Implementation</p>
        <div className='w-full border rounded-lg bg-black/50 mb-8'>
          <ol className='list-decimal list-outside px-8 py-4'>
            <li>
              Machine Learning (ML) for Simplicity and Growth
              <ul className='list-disc list-outside pl-[20px]'>
                <li>
                  Simplified Guidance: Boby uses ML algorithms to break down
                  complex ideas into digestible explanations tailored to the
                  users cognitive and emotional state.
                </li>
                <li>
                  Sentiment Analysis: Detects user emotions in real time,
                  adapting tone and language to provide comforting responses.
                </li>
                <li>
                  Dynamic Interaction: Leverages generative AI to create
                  personalized conversations that evolve based on user behavior
                  and preferences.
                </li>
              </ul>
            </li>
            <li>
              Adaptive Learning
              <ul className='list-disc list-outside pl-[20px]'>
                <li>
                  Real-Time Feedback: Continuously learns from user interactions
                  to refine its simplicity-first approach.
                </li>
                <li>
                  Knowledge Growth: Expands its advice and insights library with
                  every interaction, ensuring users always receive fresh,
                  relevant guidance.
                </li>
              </ul>
            </li>
            <li>
              Cloud Integration
              <ul className='list-disc list-outside pl-[20px]'>
                <li>
                  Always Accessible: Hosted on scalable cloud infrastructure,
                  Boby is available to users across platforms and devices.
                </li>
                <li>
                  Seamless Updates: Regularly incorporates new features,
                  ensuring continuous improvement and innovation.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Features */}
        <p className='text-3xl mb-5'>Features</p>
        <ol className='list-decimal list-outside pl-[20px] mb-8'>
          <li>
            Guided Reflection
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Encourages users to slow down and process their thoughts with
                simple analogies and relatable examples.
              </li>
              <li>
                Example:
                <ul className='list-disc list-outside pl-[20px]'>
                  <li>User: “I feel overwhelmed with work.”</li>
                  <li>
                    Boby: “Think of it like juggling. Maybe you just need to set
                    one ball down for a moment. What’s the easiest one to start
                    with?”
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Interactive Storytelling
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Users can engage with Boby in collaborative story creation,
                blending wisdom with creativity.
              </li>
              <li>
                Example:
                <ul className='list-disc list-outside pl-[20px]'>
                  <li>User: “Tell me a story about rest.”</li>
                  <li>
                    Boby: “Once, in the Restful Realm, there was a tree that
                    grew stronger the more it paused to soak in the sunlight.
                    Maybe you need your sunlight too.”
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Personal Growth Tools
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Offers exercises for mindfulness, time management, or personal
                reflection.
              </li>
              <li>
                Example:
                <ul className='list-disc list-outside pl-[20px]'>
                  <li>User: “I don’t know what to do next in life.”</li>
                  <li>
                    Boby: “Close your eyes. Imagine your day 10 years from now.
                    What’s one thing you’d like to have done by then?”
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Playful Engagement
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Lighthearted interactions to bring humor and charm into users’
                routines.
              </li>
              <li>
                Example:
                <ul className='list-disc list-outside pl-[20px]'>
                  <li>
                    Boby: “Remember, even snails reach their destination. And
                    they don’t need Google Maps!”
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        {/* Use Case */}
        <p className='text-3xl mb-5'>Use Case</p>
        <ol className='pl-[20px] list-decimal list-outside mb-8'>
          <li>
            Welcome Experience
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Introduces Boby with a warm and quirky message: “Hey there! I’m
                Boby, your Restful Realm guide. Need a dose of calm or just
                someone to simplify things for you? Let’s get started!”
              </li>
            </ul>
          </li>
          <li>
            Interactive Conversations
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Users initiate dialogue, and Boby dynamically responds, adapting
                to their needs:
                <ul className='list-disc list-outside pl-[20px]'>
                  <li>User: “Explain blockchain to me.”</li>
                  <li>
                    Boby: “Think of it as a digital ledger where everyone keeps
                    the same notes. No erasers allowed!”
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Branching Outcomes
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Boby crafts personalized responses that align with user
                preferences, leading to reflective insights or lighthearted
                banter:
                <ul className='list-disc list-outside pl-[20px]'>
                  <li>Accept guidance: Boby provides actionable steps.</li>
                  <li>Opt for humor: Boby shares a playful anecdote.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Call to Action
            <ul className='list-disc list-outside pl-[20px]'>
              <li>
                Encourages users to deepen their engagement: “Feeling calmer?
                Let’s explore more ways to keep things simple.”
              </li>
            </ul>
          </li>
        </ol>

        {/* Conclusion */}
        <p className='text-3xl mb-5'>Conclusion</p>
        <p className='mb-8'>
          Boby is more than an AI chatbot—its a companion for navigating life’s
          complexities with ease. With its charm, wit, and calming wisdom, Boby
          transforms overwhelming moments into opportunities for reflection and
          growth. Boby is here to remind us all that sometimes, taking it slow
          is the fastest way forward.
        </p>
      </div>

      <Footer />
    </main>
  );
}
