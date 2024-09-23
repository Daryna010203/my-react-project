

const Section = ({title, children}) => {
  return (
      <section style={{ width: '125px' }}>Section
          <h6>{title}</h6>
          {children}
      </section>
  )
}

export default Section;