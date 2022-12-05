function Modal({ url, title, desc, github, website, badges }) {
  return (
    <div className='myModal-container'>
      <div className='card card-compact bg-base-100 shadow-xl myModal w-11/12 lg:w-3/5'>
        <figure>
          <img src={url} draggable={false} />
        </figure>
        <div className='card-body'>
          <div className='flex items-center'>
            <h2 className='card-title text-base'>{title}</h2>
            <div className='flex badges ml-2'>
              {badges &&
                badges.map((badge, index) => {
                  return (
                    <div
                      key={index}
                      className={`badge badge-outline mr-1 ${badge}`}
                    >
                      {badge}
                    </div>
                  )
                })}
            </div>
          </div>
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
                className='btn btn-primary text-sm btn-view'
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
