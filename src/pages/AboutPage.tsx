import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et architecto molestiae eveniet ipsa omnis, tenetur quas optio totam at amet vitae nostrum consequatur eaque recusandae, praesentium ea, quibusdam quaerat?</p>
            <button 
                className='btn'
                onClick={() => history.push('/')}
            >
                Back to tasks page
            </button>
        </>
    )
}
