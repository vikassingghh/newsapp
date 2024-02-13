import React from 'react'
import './News.css'


const News = (props) => {

  return (
    <div className='container'>
        <div className="card mb-3">
  <         div className="row g-0">
                <div className="col-md-4">
                    <img src={props.article.urlToImage} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.article.title}</h5>
                        <p className="card-text">{props.article.description}</p>
                        <a type="button" class="btn btn-primary" href={props.article.url}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News
