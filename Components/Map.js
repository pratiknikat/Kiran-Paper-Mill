import React from 'react'

export default function Map(props) {
  return (
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.752512060411!2d76.2084641!3d20.801298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9eec43ea2025d%3A0x3f835853339b7ee3!2sKiran%20Paper%26%20Board%20Industries!5e0!3m2!1sen!2sin!4v1693722493128!5m2!1sen!2sin" width="600" height="450" style={props.style} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
