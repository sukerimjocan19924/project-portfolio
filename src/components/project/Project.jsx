import React from 'react'
import styles from './Project.module.scss'
import { projectList } from '../../utils/projectList'
import ProjectCard from '../ProjectCard/ProjectCard'

const Project = () => {
  return (
    <section
        className={styles.Project_section}
        aria-labelledby='project-heading' >
        <div className={`inner ${styles.inner}`}>
            <h1 className="tit">
                Projects I&apos;m proud of
            </h1>
            <div className={styles.grid}>
                {projectList.map((p) => (
                    <ProjectCard
                        key={p.title}
                        {...p}
                        />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project
