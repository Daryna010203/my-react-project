import './App.css'
import Product from './Product';
import Profile from './Profile';
import Logo from './Logo';
import Title from './Title';
import Section from './Section';




const arrayOfNumbers = [
    {
        id: 1,
        number: 25,
    },
    {
        id: 2,
        number: 125, 
    },
    {
        id: 3,
        number: 225, 
    }
]


export default function App() {
  return (
    <div>
      <h1>Products</h1>
   
      <Section title='New coutse'>
        <Product />
      <Profile/>
      <Product price={20} />
      <Profile/>
      <Product price={20+1} />
      <Profile />
      <Logo></Logo>
      <Title name='Mari'></Title>
      <Title name='Kerry'></Title>
      <Title name='Daryna' isAvailable={false} ></Title>
      </Section>
      <h1>Products</h1>
      <Section title='Hello world'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis dolorem cumque voluptatibus, neque totam quae ullam sapiente at cupiditate cum soluta debitis. Ad, numquam quos rem architecto quibusdam esse?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dignissimos expedita id explicabo earum molestias mollitia quasi placeat aliquid eveniet? Iure officia temporibus itaque molestias dolor delectus nihil dolorum quod!</p>
      </Section>
      <ul>
        {arrayOfNumbers.map((el) => {
          return <li key={el.id}>
            <h4>number: {el.number}</h4>
         </li>
       })}
      </ul> 
      

      
      
     
    
    
    </div>
    
    
    
  );
}


