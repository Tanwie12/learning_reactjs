import React, { PureComponent } from 'react'
import Person from './person';
export class Namelist extends PureComponent {
  render() {
    const list=[
        {
            name: 'adey',
            age:30,

        },
        {
            name: 'Tanwie',
            age:30,
            
        },
        {
            name: 'bruno',
            age:30,
            
        }
    ];
    const lsitarray = list.map((x,index)=><Person key={index} person={x}/>);
    return (
      <div>{lsitarray}</div>
    )
  }
}

export default Namelist