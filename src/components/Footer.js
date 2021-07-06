import React from 'react'

const Footer = () => {
  return (
  <footer className="page-footer">
    <ul className="social">
      <li><a className="page-footer" href="#"><span className="material-icons-round">face</span> Facebook</a></li>
      <li><a className="page-footer" href="#"><span className="material-icons-round">camera_alt</span> Instagram</a></li>
      <li><a className="page-footer" href="#"><span className="material-icons-round">alternate_email</span> Twitter</a></li>
    </ul>
    <nav aria-label="Legal">
      <ul className="legal">
        <li><a className="page-footer" href="#">Terms of Use</a></li>
        <li><a className="page-footer" href="#">Privacy Policy</a></li>
        <li><a className="page-footer" href="#">Accessibility Policy</a></li>
      </ul>
    </nav>
    <p className="copyright">Scripta &copy; Copyright, {(new Date()).getFullYear()}.</p>
  </footer>
  )
}

export default Footer