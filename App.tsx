import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import { ChevronUpIcon } from './components/Icons';

const App: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white font-sans text-gray-700 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Hero />

        <Section id="abstract" title="Abstract" className="pt-[30px] pb-[85px] pl-[1px] border-t border-gray-100">
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            This paper introduces a real-time motion planning framework using Nonlinear Model Predictive Control (NMPC) for a group of mobile manipulators carrying a load together in coordination with humans. The described method allows for safe and robust navigation in dynamic environments by optimizing several objectives simultaneously.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            The key to our framework is a new dynamic coordinated approach that enables successful task completion by the human-robot team. The constraints of the system, such as robot kinematics, rigid formation maintenance, and collision avoidance among the robots as well as with the obstacles achieved using Velocity Obstacle (VO) are incorporated directly in its NMPC. The robot team actively coordinates with the human partner by issuing signals to modulate their speed or pause the task in response to predicted task difficulty and safety-critical thresholds in complex, cluttered environments. The efficacy of the proposed method is validated across over 50 simulation trials in high-fidelity CoppeliaSim environments, achieving a 96% task completion rate compared to 18.2% for a baseline controller without coordination, demonstrating safe object transport, rigid formation maintenance, and robust human-partner tracking in cluttered environments.
          </p>
          <div className="mt-12 flex flex-col items-center bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <img src="./ELSEIVER PAPER DIAGRAMS.png" alt="Figure 1: Main Concept" className="w-full max-w-4xl rounded-xl shadow-sm" />
          </div>
        </Section>

        <Section id="methodology" title="Methodology" className="pt-[15px] pb-[85px] border-t border-gray-100">
          <p className="text-lg leading-relaxed mb-12 text-gray-600">
            Our framework relies on a centralized Nonlinear Model Predictive Control (NMPC) structure that predicts system behavior to generate proactive, collision-free control actions. Human motion is inherently uncertain, so rather than predicting future human states, we define a dynamically generated reference point just behind the human partner.
          </p>
          <div className="flex flex-col gap-8">
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-3 text-gray-900">NMPC Optimization</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                The framework simultaneously solves for human-guided tracking, rigid payload grasp maintenance, and multi-obstacle collision avoidance. Dynamic obstacle collision avoidance leverages the Velocity Obstacle (VO) technique, ensuring the formation pro-actively steers clear of moving objects.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-3 text-gray-900">Adaptive Coordination Protocol</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Unlike traditional open-loop followers, our system features a dual-layer signaling protocol:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold mr-3 mt-0.5">1</span>
                  <span className="text-gray-600 text-base"><strong className="text-gray-900 font-medium">Proactive Feedback:</strong> Evaluates optimization cost. If high, signals the human to "SLOW DOWN" to prevent tracking errors.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-bold mr-3 mt-0.5">2</span>
                  <span className="text-gray-600 text-base"><strong className="text-gray-900 font-medium">Reactive Supervision:</strong> Enforces spatial cohesion bounds with a "STOP" signal to pause progression if the human gets too far ahead.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <img src="./ELSEIVER PAPER DIAGRAMS (1).png" alt="Figure 2: Proposed Methodology" className="w-full max-w-4xl rounded-xl shadow-sm" />
          </div>
        </Section>

        <Section id="results" title="Results" className="pt-[15px] pb-20 md:pb-28 border-t border-gray-100">
           <p className="text-lg leading-relaxed mb-12 text-gray-600">
            Extensive experiments were conducted in a high-fidelity CoppeliaSim physics environment simulating multiple robotic manipulators (KUKA youBot platforms) grasping a rigid plate and following a human-driven reference agent.
          </p>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-serif mb-4 text-gray-900">Task Success and Performance</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Over 50 scenarios with both static and dynamic clutter were evaluated. The robot team efficiently tracked the human-led path, navigating narrow corridors while preserving the physical formation to safely transport the object. We achieved a <strong className="text-gray-900 font-medium">96% task completion rate</strong>, highlighting exceptional reliability.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-4 text-gray-900">Ablation Study: The Value of Coordination</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To isolate the value of our Adaptive Coordination Protocol, we compared our solution against a naive follower baseline (a standard NMPC without feedback to the human). Under identical conditions, the baseline system rapidly breached visual sensor limits as robots struggled to match the pace in tight environments, resulting in catastrophic task failure with only an <strong className="text-gray-900 font-medium">18.2% success rate</strong>. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                Our proposed coordination protocol implicitly kept human-robot separation well bounded (average maximum separation of 4.15m), proving essential for cohesive team operation.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
            <img 
              src="./HRI_Analysis.png" 
              alt="Comprehensive Analysis of Human-Robot Interaction Dynamics" 
              className="w-full max-w-4xl rounded-xl shadow-sm" 
            />
            
            <p className="mt-6 max-w-4xl text-sm text-gray-600 leading-relaxed text-justify">
              <strong>Comprehensive Analysis of Human-Robot Interaction Dynamics.</strong> This figure presents a three-tiered analysis of the
              interaction over time. <strong>(Top)</strong> The relationship between the robot’s MPC Cost (red) and the human’s adaptive Human Speed
              (blue), which modulates in response to the robot-generated coordination signals. The velocity data is logged directly from the
              simulation environment, representing the partner’s cooperative response to proactive and reactive feedback. <strong>(Middle)</strong> The core
              feedback loop, illustrating the Human-Robot Distance (blue/red) and the responsive Average Robot Speed (green). The line
              turns red when the safety distance threshold is breached. <strong>(Bottom)</strong> The resulting consequences on human behavior, plotting the
              binary Human State (purple: 0 for Moving, 1 for Waiting) against the cumulative Path Progress (orange). The yellow shaded
              areas explicitly highlight periods where the human is waiting for the robots.
            </p>
          </div>
        </Section>
        
      </main>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon />
      </button>
    </div>
  );
};

export default App;
