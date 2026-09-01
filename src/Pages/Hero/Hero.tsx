import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  Users
} from 'lucide-react'

import './Hero.css'
import './AnimatedHero.css'

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section"
    >

      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />


      {/* LEFT CONTENT */}

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8
        }}
      >

        <div className="hero-badge">

          <span className="status-dot" />

          SMART LEAD MANAGEMENT PLATFORM

        </div>


        <h1>
          Turn Every Lead
          <br />

          <span>
            Into an Opportunity.
          </span>
        </h1>


        <p className="hero-description">
          Capture, organize, track and convert your
          leads with one powerful platform built
          for modern sales teams.
        </p>


        <div className="hero-buttons">

          <button className="primary-btn">

            Get Started

            <ArrowRight size={18} />

          </button>


          <button className="secondary-btn">

            Explore Platform

            <ArrowRight size={18} />

          </button>

        </div>


        <div className="hero-trust">

          <CheckCircle2 size={18} />

          <span>
            Built for growing sales teams
          </span>

        </div>

      </motion.div>


      {/* ANIMATED JOURNEY */}

      <HeroJourney />

    </section>
  )
}


const HeroJourney = () => {

  return (

    <div className="journey-wrapper">

      {/* Goal */}

      <motion.div
        className="journey-goal"
        animate={{
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      >

        <Trophy size={25} />

        <span>
          Lead Converted
        </span>

      </motion.div>


      {/* Mountain */}

      <div className="journey-path">

        <div className="step step-1" />
        <div className="step step-2" />
        <div className="step step-3" />
        <div className="step step-4" />
        <div className="step step-5" />

      </div>


      {/* Person */}

      <motion.div
        className="journey-person"
        animate={{
          x: [0, 35, 70, 105, 140],
          y: [120, 90, 65, 35, 5]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >

        <div className="person-head" />

        <div className="person-body">

          <Users size={20} />

        </div>

      </motion.div>


      {/* Celebration */}

      <motion.div
        className="celebration"
        animate={{
          opacity: [0, 0, 0, 1, 0],
          scale: [0.5, 0.5, 0.5, 1.2, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      >

        🎉 ✨ 🎊

      </motion.div>

    </div>
  )
}

export default Hero