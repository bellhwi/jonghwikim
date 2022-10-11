function Modal({ url, title, desc, github, website }) {
  return (
    <div className='myModal-container'>
      <div className='card card-compact bg-base-100 shadow-xl myModal'>
        <figure>
          <img src={url} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-base'>{title}</h2>
          <p className='pt-1 pb-4 pl-1 text-sm'>{desc}</p>
          <div className='card-actions justify-end'>
            {github ? (
              <a
                className='btn btn-tertiary text-sm'
                href={github}
                target='_blank'
                rel='noreferrer'
              >
                View Source Code
              </a>
            ) : null}
            {website ? (
              <a
                className='btn btn-primary text-sm'
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
