import React from 'react'
import styles from './Project.module.scss'
import { projectList } from '../../utils/projectList'
import ProjectCard from '../projectCard/ProjectCard'
import { motion as Motion, scale } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: .15,
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .3,
      ease: [.22, 1, .36, 1]
    }
  }
}

const Project = () => {
  return (
    <section
        className={styles.project_section}
        aria-labelledby='project-heading' >
        <div className={`inner ${styles.inner}`}>
            <h1 className="tit tit__m">
                Projects I&apos;m proud of
            </h1>
            <Motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: .2 }}
                className={styles.grid}>
                {projectList.map((p) => (
                    <Motion.div
                        key={p.title}
                        variants={itemVariants} >

                        <ProjectCard
                            {...p} />
                    </Motion.div>
                ))}
            </Motion.div>
        </div>
    </section>
  )
}

export default Project
