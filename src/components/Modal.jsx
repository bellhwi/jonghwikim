function Modal({ url, title, desc, github, website }) {
  return (
    <div className='myModal-container'>
      <div className='card w-8/12 bg-base-100 shadow-xl myModal'>
        <figure>
          <img src={url} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p className='pt-2 pb-4 pl-1'>{desc}</p>
          <div className='card-actions justify-end'>
            {github ? (
              <a
                className='btn btn-tertiary'
                href={github}
                target='_blank'
                rel='noreferrer'
              >
                View Source Code
              </a>
            ) : null}
            {website ? (
              <a
                className='btn btn-primary'
                href={website}
                target='_blank'
                rel='noreferrer'
              >
                View Website
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
