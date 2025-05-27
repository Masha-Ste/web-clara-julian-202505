function Project({ project }) {
  const { title, description, media, isVideo } = project

  return (
    <div className='bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden p-6 space-y-4 w-full mx-auto'>
      <h3 className='text-2xl font-bold text-yellow-400'>{title}</h3>

      <p className='text-gray-300'>{description}</p>
      {media && <div className='mt-4 w-full aspect-video rounded-md overflow-hidden'>{isVideo ? <iframe src={media} title={title} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='w-full h-full' /> : <img src={media} alt={title} className='w-full h-full object-cover' />}</div>}
    </div>
  )
}

export default Project
