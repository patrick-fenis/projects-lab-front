import { useState, useEffect} from 'react'

const About = (props) => {
    const [about, setAbout] = useState(null)
    const getAboutData = async () => {
        const response = await fetch(props.URL + 'about')
        const data = await response.json()
        setAbout(data)
    }
    useEffect(() => getAboutData())

    console.log(about)
    
    const loaded = () => {
        return (
            <div>
                <h1>{about.name}</h1>
                <h2>{about.email}</h2>
                <p>{about.bio}</p>
            </div>
        )
    }
    
    return(
        about ? loaded() : <h1>Loading...</h1>
    )
}

export default About


