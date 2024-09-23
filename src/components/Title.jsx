


    

const Title = (props) => {
    const {name, isAvailable = true} = props;
    
  return (
      <div>Title
          <h4>Name: {name}</h4>
          <p>Available: {isAvailable ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Title