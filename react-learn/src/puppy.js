function Puppy(props) {
    const { doginfo } = props;
    const {breed,color,age} = doginfo;
    
    return (
      <h1>
        hello PUPPY,{breed} 
        {color} 
        {age} 
      </h1>
    );
}

export default Puppy;
