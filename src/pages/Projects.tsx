const Projects = () => {
  return (
    <div className="h-screen bg-base-100">
      <div className="h-full max-w-3xl mx-auto p-8">
        <div className="h-full flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-8">My Projects</h1>
          
          <div className="grid gap-6">
            <div className="card w-96 bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Project 1</h2>
                <p>Description of your first project goes here.</p>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="card w-96 bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Project 2</h2>
                <p>Description of your second project goes here.</p>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
