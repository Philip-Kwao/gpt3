import React from 'react'
import { Feature } from '../../components'
import './features.css'
const Features = () => {
  const featuresData = [
    {
      title: 'Improving end distrusts instantly',
      text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
    },
    {
      title: 'Become the tended Active',
      text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
    },
    {
      title: 'Message or  am nothing',
      text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
    },
    {
      title: 'Really boy law country',
      text: 'Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.'
    },
  ]
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, index)=>(
          <Feature title={item.title} text={item.text } key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features