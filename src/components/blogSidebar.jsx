import React from 'react';

const BlogSidebar = () => (
  <div className="col-md-4 sidebar">
    <div className="sidebar-box">
      <form className="search-form">
        <div className="form-group">
          <span className="icon fa fa-search"></span>
          <input type="text" className="form-control" placeholder="Buscar..." />
        </div>
      </form>
    </div>

    <div className="sidebar-box">
      <h3>Categorías</h3>
      <ul className="categories">
        <li><a href="#">Coaching <span>(12)</span></a></li>
        <li><a href="#">Counselling <span>(22)</span></a></li>
      </ul>
    </div>

    <div className="sidebar-box">
      <img src="/images/perfil2.jpg" alt="Autor" className="img-fluid mb-4" />
      <h3>Acerca del autor</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque...</p>
    </div>
  </div>
);

export default BlogSidebar;