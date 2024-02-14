import aboutme from '../assets/images/aboutme2.jpeg'

export default function About() {
  return (
    <>
    <img className="about-img" src={aboutme} alt='About me'/>
    <div className='container'>
    <div className="about-container">
    <div className="about-text">
      <p >With over 10 years of experience in sales and operations roles, I&apos;ve decided to embark on a total career change towards software engineering, driven by my passion for problem solving and creating intuitive digital products. </p> 
      <p>I bring strength in team collaboration, communication and time management.</p>
      <p>My diverse professional background allows me to approach engineering challenges methodically, collaborate cross-functionally, and focus on crafting solutions centered around end user needs.</p>
    </div>
    <div className="skills">
      <h4 className='skills-title'>Skills</h4>
      <div className='group-skill'>
      <div className='single-skill'>
      <svg className='react1' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="React"><path d="M12,17.143C6.183,17.143,0,15.34,0,12s6.183-5.143,12-5.143S24,8.66,24,12S17.817,17.143,12,17.143z M12,8.357C5.99,8.357,1.5,10.28,1.5,12s4.49,3.643,10.5,3.643S22.5,13.72,22.5,12S18.01,8.357,12,8.357z" fill="#a89d9d" className="color000000 svgShape"></path><path d="M7.774,22.998c-0.521,0-0.998-0.128-1.407-0.383l0,0c-2.838-1.762-1.232-8.178,1.719-13.319c2.488-4.336,5.716-7.546,8.223-8.178c0.873-0.221,1.669-0.128,2.303,0.267c2.838,1.762,1.232,8.178-1.719,13.319c-2.487,4.336-5.715,7.545-8.223,8.178C8.36,22.96,8.06,22.998,7.774,22.998z M17.206,2.5c-0.162,0-0.339,0.024-0.531,0.073c-1.747,0.44-4.679,2.92-7.289,7.469c-3.071,5.352-3.709,10.38-2.229,11.3h0c0.284,0.177,0.669,0.206,1.145,0.085c1.748-0.44,4.679-2.921,7.289-7.469c3.072-5.352,3.71-10.38,2.229-11.3C17.65,2.553,17.445,2.5,17.206,2.5z" fill="#a89d9d" className="color000000 svgShape"></path><path d="M16.226,22.998c-0.286,0-0.586-0.038-0.896-0.116c-2.508-0.633-5.736-3.842-8.223-8.178C4.156,9.562,2.55,3.146,5.389,1.385C6.021,0.99,6.818,0.897,7.691,1.118c2.507,0.632,5.735,3.842,8.223,8.178c2.951,5.142,4.557,11.558,1.719,13.319C17.224,22.87,16.748,22.998,16.226,22.998z M6.794,2.5C6.555,2.5,6.35,2.553,6.18,2.658c-1.482,0.92-0.844,5.948,2.228,11.3c2.61,4.548,5.542,7.028,7.289,7.469c0.477,0.121,0.86,0.092,1.145-0.085h0c1.481-0.92,0.843-5.948-2.229-11.3c-2.61-4.549-5.542-7.028-7.289-7.469C7.133,2.524,6.956,2.5,6.794,2.5z" fill="#a89d9d" className="color000000 svgShape"></path><path d="M12,14.5c-1.378,0-2.5-1.121-2.5-2.5s1.122-2.5,2.5-2.5s2.5,1.121,2.5,2.5S13.378,14.5,12,14.5z M12,11c-0.551,0-1,0.448-1,1s0.449,1,1,1s1-0.448,1-1S12.551,11,12,11z" fill="#a89d9d" className="color000000 svgShape"></path></svg>      
      <p className='skills-p'>React</p>
      </div>
      <div className='single-skill'>
      <svg className='js1' title="JavaScript"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Js"><path fill="#a89d9d" d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z" className="color444444 svgShape"></path></svg>
      <p className='skills-p'>JavaScript</p>
      </div>
      <div className='single-skill'>
      <svg className='python1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Python"><path fill="#a89d9d" d="M49.33 62h29.159c8.117 0 14.511-6.868 14.511-15.019v-27.798c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191-12.355 2.181-14.453 6.751-14.453 15.176v10.817h29v4h-40.224000000000004c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53 2.075 8.642 7.03 14.659 15.515 14.659h9.946v-13.048c0-9.637 8.428-17.952 18.33-17.952zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.281 48.811c-2.098-8.448-6.103-14.811-14.599-14.811h-10.682v12.981c0 10.05-8.794 18.019-18.511 18.019h-29.159c-7.988 0-14.33 7.326-14.33 15.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0 7.349-2.129 14.487-6.411 14.487-14.834v-11.126h-29v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z" className="colorffd845 svgShape"></path></svg>
      <p className='skills-p'>Python</p>
      </div>
      <div className='single-skill'>
      <svg className='django1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Django"><path fill="#a89d9d" d="M21.25 6.06v-.001h-3.897v7.747c0 3.414-.177 4.714-.734 5.835-.531 1.096-1.367 1.81-3.088 2.625L17.15 24c1.721-.866 2.556-1.656 3.189-2.905.683-1.299.911-2.803.911-5.937V6.06z" className="color0d2e1e svgShape"></path><path fill="#a89d9d" d="M15.049 18.166V0h-3.897v5.984a6.182 6.182 0 0 0-1.695-.204c-4.075 0-6.707 2.599-6.707 6.6 0 4.154 2.48 6.32 7.238 6.32 1.594.001 3.062-.152 5.061-.534zm-8.326-5.862c0-2.141 1.138-3.364 3.113-3.364h-.004c.028-.002.055-.002.082-.002.443 0 .868.075 1.237.205v6.294a8.933 8.933 0 0 1-1.341.102c-1.998.001-3.087-1.145-3.087-3.235zM17.353.021h3.897v4.026h-3.897z" className="color0d2e1e svgShape"></path></svg>
      <p className='skills-p'>Django</p>
      </div>
      <div className='single-skill'>
      <svg className='postgreSQL1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Postgresql"><path fill="#a89d9d" fillRule="evenodd" d="M123.258 76.784c-.45-2.918-2.901-4.829-5.752-4.958-1.032-.047-2.08.061-3.109.192-1.243.158-2.471.438-3.711.623-.857.128-1.726.187-2.582.275l-.021-.111c1.598-3.018 3.263-6.003 4.775-9.064 1.159-2.348 2.151-4.781 3.176-7.194 1.696-3.998 3.051-8.12 4.173-12.309 1.075-4.011 1.995-8.066 2.284-12.227.116-1.662.196-3.331.187-4.995-.008-1.327-.151-2.656-.284-3.979-.15-1.516-.608-2.953-1.242-4.336-.836-1.822-2.132-3.317-3.496-4.737-1.092-1.137-2.293-2.173-3.484-3.208-1.698-1.477-3.607-2.656-5.59-3.703-2.253-1.19-4.621-2.121-7.09-2.75-1.493-.381-3.02-.664-4.532-.966-.544-.11-1.089-.337-1.633-.337h-10.241c-.37 0-.737.191-1.11.233-2.452.273-4.875.735-7.228 1.464-.88.273-1.684.101-2.52.024-.641-.059-1.271-.231-1.912-.263-2.442-.122-4.887-.301-7.328-.275-2.339.024-4.654.409-6.918 1.052-1.895.538-3.749 1.195-5.447 2.191-.727.426-1.303.346-2.055.129-2.527-.729-5.072-1.414-7.639-1.989-1.6-.358-3.245-.536-4.879-.707-1.566-.163-3.144-.261-4.718-.294-1.538-.033-3.087-.032-4.618.104-2.439.217-4.832.713-7.158 1.513-2.583.888-4.951 2.175-7.086 3.865-2.167 1.715-3.905 3.809-5.303 6.2-1.473 2.523-2.483 5.224-3.111 8.061-.34 1.537-.555 3.117-.788 4.678-.073.486.732.972-.268 1.456v6.794c1 .452.208.903.266 1.356.139 1.089.262 2.187.446 3.268.291 1.711.636 3.417.988 5.117.491 2.375 1.002 4.748 1.546 7.111.396 1.72.847 3.43 1.319 5.131.721 2.598 1.431 5.201 2.246 7.77.757 2.387 1.624 4.74 2.484 7.093 1.191 3.255 2.617 6.405 4.327 9.424 1.479 2.614 3.169 5.062 5.436 7.076 1.494 1.327 3.157 2.347 5.093 2.857 1.521.4 3.067.448 4.624.129 1.805-.37 3.403-1.147 4.824-2.311.163-.134.342-.236.535.01.735.931 1.719 1.552 2.748 2.089 2.777 1.448 5.803 1.882 8.877 2.059.744.043 1.496-.064 2.246-.085 1.461-.04 2.881-.325 4.278-.729.732-.212 1.447-.481 2.192-.732.039.793.089 1.557.112 2.321l.104 4.166c.019.634.044 1.27.103 1.901.151 1.627.299 3.255.493 4.877.135 1.118.275 2.245.538 3.336.529 2.203 1.246 4.348 2.158 6.428.895 2.041 2.182 3.764 3.9 5.185 2.22 1.836 4.822 2.619 7.632 2.764 1.162.061 2.357.004 3.501-.204 1.813-.329 3.622-.743 5.387-1.275 3.591-1.084 6.695-2.956 9.014-5.981 1.32-1.724 2.404-3.589 3.1-5.648.574-1.701 1.115-3.419 1.545-5.16.34-1.372.508-2.787.715-4.188.137-.927.219-1.863.305-2.797.14-1.517.283-3.033.384-4.553.07-1.058.067-2.121.109-3.181.013-.323.065-.644.095-.966.028-.298.178-.401.482-.396 1.071.016 2.144.044 3.212-.004 1.197-.054 2.405-.105 3.583-.303 1.677-.281 3.346-.636 4.99-1.067 1.943-.508 3.725-1.418 5.44-2.455 1.998-1.207 3.819-2.623 5.297-4.447 1.285-1.591 1.894-3.43 1.584-5.438zm-3.412.982c-.066.915-.485 1.699-1.093 2.369-2.869 3.163-6.468 5.082-10.585 6.027-1.564.358-3.178.544-4.779.692-1.363.126-2.746.147-4.114.097-1.006-.038-2.004-.268-3.032-.416-.103.94-.201 1.919-.32 2.896l-.479 3.745c-.145 1.187-.258 2.378-.407 3.564-.146 1.151-.328 2.298-.481 3.449-.143 1.072-.248 2.149-.407 3.219-.245 1.64-.479 3.284-.799 4.911-.384 1.945-.973 3.829-1.934 5.583-1.172 2.141-2.834 3.772-4.949 4.98-2.18 1.246-4.563 1.894-6.979 2.436-1.71.384-3.472.447-5.204.291-3.004-.272-5.568-1.557-7.506-3.886-1.85-2.223-3.102-4.771-3.55-7.655-.214-1.371-.368-2.754-.491-4.136-.136-1.537-.229-3.079-.299-4.62-.089-1.957-.154-3.914-.197-5.871-.053-2.406-.07-4.812-.104-7.218l-.006-.092c-1.224.734-2.427 1.538-3.703 2.2-1.494.776-3.117 1.226-4.798 1.353-1.318.1-2.653.191-3.965.086-2.151-.173-4.3-.51-6.226-1.569-.781-.43-1.596-.953-2.134-1.64-1.29-1.646-.672-3.726 1.273-4.727 1.344-.693 2.811-.982 4.268-1.319 1.266-.293 2.526-.626 3.761-1.029 1.222-.4 1.993-1.391 2.754-2.363l1.206-1.551c-.503-.053-.977-.107-1.451-.151-1.439-.136-2.812-.532-4.125-1.114-1.124-.497-1.141-.551-1.965.343-1.376 1.494-2.714 3.023-4.062 4.542-.992 1.117-1.978 2.241-2.965 3.361-.978 1.108-1.894 2.279-2.947 3.31-1.564 1.531-3.449 2.452-5.698 2.348-1.443-.066-2.764-.572-3.952-1.399-2.452-1.708-4.104-4.097-5.608-6.606-1.927-3.215-3.406-6.64-4.672-10.159-.876-2.432-1.756-4.866-2.521-7.333-.831-2.681-1.56-5.396-2.277-8.11-.542-2.048-1.023-4.113-1.482-6.182-.521-2.353-1.022-4.71-1.464-7.079-.298-1.599-.471-3.221-.712-4.831-.325-2.17-.385-4.36-.267-6.539.105-1.963.387-3.921.667-5.871.388-2.698 1.277-5.244 2.556-7.648.783-1.473 1.755-2.812 2.879-4.056 1.845-2.042 4.078-3.518 6.562-4.626 1.736-.774 3.57-1.24 5.439-1.604 2.774-.54 5.573-.519 8.373-.461 1.224.025 2.443.248 3.666.369 2.633.262 5.214.816 7.762 1.5 1.857.498 3.676 1.143 5.518 1.703.185.056.456.051.607-.048 2.496-1.629 5.224-2.704 8.125-3.319 1.101-.233 2.237-.335 3.363-.407 1.369-.087 2.749-.167 4.115-.088 1.642.094 3.276.336 4.908.56.792.108 1.565.383 2.359.458.38.036.783-.242 1.185-.335 2.049-.473 4.089-1 6.156-1.374 1.539-.278 3.111-.409 4.676-.499 1.745-.1 3.503-.173 5.247-.089 2.205.106 4.394.42 6.555.923 2.677.623 5.245 1.528 7.686 2.784 1.824.938 3.558 2.026 5.119 3.364 1.023.878 2.07 1.745 2.994 2.723 1.14 1.206 2.303 2.413 3.018 3.958.538 1.165.922 2.371 1.028 3.647.132 1.586.292 3.178.277 4.766-.014 1.519-.221 3.037-.368 4.552-.334 3.454-1.085 6.833-1.997 10.167-.754 2.754-1.635 5.478-2.589 8.17-.879 2.481-1.893 4.917-2.918 7.343-.757 1.794-1.572 3.569-2.458 5.303-1.677 3.286-3.421 6.538-5.438 9.633-.348.535-.678 1.083-1.018 1.629.88.594 1.877.803 2.881.911.955.104 1.929.166 2.883.095 1.527-.113 3.049-.331 4.567-.544 1.504-.21 2.978-.638 4.522-.525 1.542.112 2.645 1.284 2.54 2.729zM97.833 74.413c-.655-.846-1.323-1.682-1.964-2.538-1.006-1.344-1.729-2.845-2.455-4.353-.688-1.429-1.532-2.782-2.257-4.195-1.265-2.465-2.553-4.922-3.718-7.435-1.465-3.157-2.62-6.426-2.984-9.923-.154-1.48-.193-2.958.106-4.424.479-2.341 1.702-4.172 3.758-5.428 1.907-1.165 4.032-1.541 6.209-1.659 1.351-.073 2.708-.013 4.11-.013l-.047-.237c-.872-1.823-1.687-3.677-2.641-5.457-1.346-2.512-3.068-4.777-4.986-6.877-1.421-1.555-2.96-2.998-4.646-4.273-1.658-1.255-3.405-2.376-5.269-3.293-2.223-1.093-4.538-1.938-6.967-2.477-2.334-.518-4.683-.835-7.077-.861-2.042-.022-4.071.07-6.06.531-3.002.695-5.748 1.931-8.137 3.933-1.334 1.118-2.498 2.373-3.517 3.77-1.196 1.643-2.161 3.417-2.986 5.277-1.132 2.552-1.909 5.208-2.44 7.938-.266 1.361-.474 2.734-.686 4.106-.074.48-.08.971-.123 1.521.369-.192.635-.34.907-.472l.885-.397c2.993-1.369 6.094-2.25 9.427-2.149 1.416.043 2.771.323 4.03.943 2.415 1.191 3.828 3.216 4.442 5.779.424 1.769.714 3.573.996 5.372.221 1.405.447 2.825.473 4.242.037 2.071-.068 4.146-.181 6.216-.096 1.764-.464 3.5-1.08 5.146-1.12 2.993-2.368 5.937-3.534 8.913-.385.983-.681 2.001-1.045 3.082.562 0 1.018-.004 1.474.002.178.003.36.008.532.049 1.34.316 2.502.923 3.455 1.954 1.271 1.372 1.938 2.973 1.972 4.826.019 1.027-.089 2.057-.084 3.084.021 4.786.057 9.572.097 14.357.007.782.046 1.565.102 2.346.117 1.635.235 3.271.395 4.902.112 1.157.268 2.312.451 3.461.259 1.628 1 3.077 1.841 4.462.724 1.191 1.665 2.203 2.905 2.901 2.107 1.186 4.376 1.285 6.663.848 1.545-.295 3.062-.769 4.562-1.258 1.479-.481 2.815-1.269 3.937-2.354 1.051-1.019 1.797-2.261 2.3-3.632.976-2.659 1.28-5.459 1.684-8.237.151-1.04.282-2.083.42-3.125.157-1.186.316-2.371.468-3.556.112-.883.214-1.768.322-2.651.154-1.268.317-2.535.464-3.804.113-.981.209-1.966.309-2.949.129-1.256.268-2.512.379-3.77.086-.955.051-1.927.22-2.864.311-1.718 1.123-3.18 2.646-4.125.637-.395 1.356-.655 2.063-.989l-.12-.186zM40.236 67.361c-.761-1.802-1.218-3.68-1.354-5.622-.128-1.825.089-3.643.276-5.46.182-1.76.333-3.528.386-5.296.088-2.906-.108-5.808-.247-8.712-.084-1.729.117-3.479.271-5.212.139-1.561.312-3.126.607-4.664.495-2.581 1.152-5.125 2.086-7.591.887-2.338 1.906-4.615 3.345-6.665.986-1.406 2.105-2.72 3.18-4.094l-.319-.113c-3.498-1.111-7.053-1.979-10.709-2.358-1.729-.179-3.464-.284-5.198-.387-.532-.032-1.072.04-1.606.091-1.322.126-2.66.176-3.961.424-2.214.421-4.338 1.129-6.305 2.282-1.766 1.035-3.249 2.373-4.491 3.978-1.372 1.772-2.295 3.776-2.958 5.913-.783 2.521-1.156 5.115-1.257 7.733-.088 2.295-.132 4.603.264 6.889.295 1.702.492 3.422.817 5.117.443 2.311.918 4.617 1.467 6.904.785 3.274 1.569 6.553 2.499 9.787.89 3.099 1.894 6.17 2.982 9.204.89 2.476 1.919 4.906 3.003 7.304.706 1.562 1.561 3.065 2.457 4.528.953 1.553 2.037 3.027 3.508 4.154 1.856 1.423 3.293 1.644 5.179.083.808-.669 1.491-1.495 2.194-2.282 1.117-1.25 2.195-2.534 3.307-3.788 1.416-1.598 2.85-3.179 4.273-4.769.301-.336.59-.682.883-1.022l-.484-.425c-1.769-1.699-3.139-3.669-4.095-5.931zM93.924 19.792c1.156 1.356 2.275 2.752 3.309 4.204 2 2.809 3.598 5.842 4.775 9.087.521 1.43.937 2.874.751 4.439-.129 1.096-.118 2.208-.215 3.31-.081.917-.226 1.829-.345 2.743-.178 1.378-.436 2.752-.513 4.136-.073 1.317.003 2.648.086 3.968.084 1.341.265 2.676.388 4.015.139 1.518.326 3.036.369 4.557.035 1.249-.076 2.506-.185 3.753-.13 1.502-.511 2.956-1.079 4.351-.399.982-.876 1.934-1.327 2.917l.181.192.275.213.277-.496c2.339-3.688 4.42-7.518 6.222-11.493 1.159-2.56 2.245-5.156 3.287-7.766 1.624-4.064 2.909-8.242 3.903-12.503.446-1.913.787-3.855 1.09-5.797.236-1.518.433-3.054.477-4.586.047-1.625-.043-3.263-.193-4.884-.112-1.224-.414-2.456-1.181-3.451-1.233-1.602-2.564-3.134-4.201-4.346-1.378-1.021-2.751-2.068-4.23-2.927-2.345-1.36-4.883-2.266-7.535-2.883-2.588-.603-5.21-.863-7.849-.918-1.556-.033-3.119.134-4.672.28-1.407.132-2.805.357-4.222.543 1.52.855 3.019 1.615 4.433 2.511 2.973 1.883 5.637 4.149 7.924 6.831zM55.299 72.514c.961-3.073 2.27-6.007 3.538-8.959 1.028-2.394 1.59-4.916 1.777-7.506.093-1.277.067-2.57.004-3.851-.071-1.423-.185-2.85-.392-4.259-.266-1.801-.569-3.603-.995-5.371-.462-1.913-1.627-3.245-3.623-3.736-1.216-.299-2.424-.287-3.653-.093-3.002.473-5.75 1.579-8.31 3.199-.515.326-.798.589-.709 1.328.188 1.565.229 3.155.222 4.735-.01 2.236-.105 4.472-.19 6.707-.028.728-.133 1.452-.211 2.177-.12 1.11-.351 2.219-.344 3.327.007 1.142.124 2.311.401 3.417.88 3.507 2.744 6.377 5.799 8.402 1.879 1.245 3.958 1.873 6.24 1.992.155-.524.293-1.019.446-1.509zm-3.586-30.087c-.402-.844-.172-1.543.76-1.867.227-.08.461-.165.697-.188.324-.032.654-.008.982-.008 1.182.006 2.319.171 3.295.923.626.482.794 1.122.389 1.779-.575.932-1.452 1.4-2.529 1.49-1.697.141-2.888-.65-3.594-2.129zM98.753 42.119c.136-1.124.245-2.251.384-3.375.056-.452-.182-.574-.561-.585-1.192-.033-2.384-.075-3.576-.097-1.344-.024-2.652.192-3.896.703-1.38.568-2.431 1.478-2.86 2.98-.32 1.12-.406 2.239-.293 3.41.172 1.785.568 3.517 1.193 5.176.834 2.221 1.707 4.441 2.75 6.569 1.413 2.881 3.012 5.67 4.513 8.507.401.757.738 1.547 1.156 2.431.875-1.853 1.302-3.708 1.351-5.622.041-1.61-.088-3.227-.182-4.838-.059-.986-.198-1.966-.294-2.95-.134-1.371-.337-2.741-.368-4.115-.031-1.397.068-2.802.188-4.197.113-1.338.334-2.665.495-3.997zm-2.689-1.082c-.443 1.223-1.39 1.913-2.618 2.116-1.145.188-2.148-.235-2.894-1.148-.531-.65-.328-1.42.468-1.859.914-.506 1.919-.634 3.104-.711.322.059.807.108 1.268.24.669.189.916.692.672 1.362zM60.642 78.697c-.655-.535-1.521-.566-2.144.021-.773.73-1.453 1.565-2.133 2.388-.785.951-1.521 1.94-2.534 2.677-1.474 1.071-3.192 1.515-4.919 1.935-1.373.334-2.752.644-4.129.965l-.017.178c.409.189.805.425 1.231.56 2.1.665 4.236.996 6.455.808 1.602-.136 3.128-.485 4.574-1.171 1.99-.943 3.521-2.437 4.823-4.175.218-.29.317-.719.343-1.093.089-1.321-.582-2.303-1.55-3.093zM112.393 79.223c-1.69.181-3.382.373-5.077.47-.818.047-1.648-.109-2.474-.176-1.385-.112-2.737-.42-3.908-1.16-.678-.427-1.241-.475-1.961-.233-1.028.346-1.867.872-2.115 1.986-.169.753-.23 1.533-.298 2.304-.013.136.157.386.287.42.793.209 1.59.456 2.401.529.996.09 2.01.061 3.013.011 1.083-.054 2.173-.124 3.24-.304 2.515-.422 4.948-1.11 7.109-2.536.779-.515 1.551-1.041 2.325-1.562l-.064-.11c-.826.123-1.648.273-2.478.361z" clipRule="evenodd" className="color336791 svgShape"></path></svg>
      <p className='skills-p'>PostgreSQL</p>
      </div>
      <div className='single-skill'>
      <svg className='mongoDB1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Mongodb"><path fill="#a89d9d" d="M22.797 14.562a13.663 13.663 0 0 0-.407-2.297c-.625-2.369-1.666-4.637-3.134-6.603a16.58 16.58 0 0 0-1.294-1.532c-.476-.499-1.004-.957-1.336-1.578-.21-.393-.41-.791-.614-1.187-.003.124-.011.248-.011.371 0-.124.009-.248.011-.372l-.13-.327c-.022.075-.036.101-.036.129-.017.645-.383 1.083-.838 1.492-.512.46-.989.959-1.481 1.441.017.022.036.044.055.066-.019-.022-.038-.043-.055-.066-1.463 1.924-2.752 3.981-3.511 6.29a14.691 14.691 0 0 0-.517 2.056c-.259 1.481-.379 2.92-.296 4.42.046.829.191 1.645.407 2.448.785 2.917 2.379 5.336 4.558 7.392.405.382.842.729 1.265 1.093l.003-.011-.003.011.187.642.174.996.083 1.039c-.001.211-.01.423.003.633.003.054.074.104.113.156l.004-.006-.004.006.353.124.367.143a322.63 322.63 0 0 0-.063-.924l-.003-.91-.021.021.021-.021.127-1.386.092-.302.263-.467c.325-.262.674-.499.971-.79.536-.527 1.071-1.06 1.55-1.637a12.294 12.294 0 0 0 1.588-2.441c1.223-2.491 1.789-5.269 1.564-8.039l-.006-.074z" className="color444444 svgShape"></path></svg>
      <p className='skills-p'>MongoDB</p>
      </div>
      <div className='single-skill'>
      <svg className='express1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Express"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
      <p className='skills-p'>Express</p>
      </div>
      <div className='single-skill'>
      <svg className='node1' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="NodeJs"><path d="M6.836,20.853c-0.418,0-0.836-0.106-1.219-0.32l-0.523-0.293c-0.361-0.202-0.49-0.658-0.288-1.021c0.201-0.36,0.658-0.491,1.021-0.288l0.522,0.292c0.316,0.175,0.678,0.173,0.992-0.011c0.315-0.186,0.497-0.503,0.497-0.871V7.598c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v10.743c0,0.9-0.463,1.709-1.238,2.164C7.706,20.736,7.271,20.853,6.836,20.853z" fill="#a89d9d" className="color000000 svgShape"></path><path d="M12.002,23.999c-0.313,0-0.626-0.081-0.904-0.244l-2.403-1.407c-0.357-0.21-0.478-0.669-0.269-1.026c0.209-0.358,0.668-0.477,1.026-0.269l2.403,1.407c0.09,0.054,0.198,0.055,0.292,0l8.699-5.094C20.941,17.311,21,17.207,21,17.091V6.906c0-0.114-0.06-0.22-0.156-0.276l-8.695-5.09c-0.092-0.053-0.202-0.054-0.29-0.001L3.151,6.632C3.058,6.687,3,6.791,3,6.904v10.187c0,0.112,0.06,0.22,0.152,0.273l2.688,1.574c0.357,0.21,0.478,0.669,0.269,1.026c-0.21,0.356-0.669,0.476-1.026,0.269l-2.688-1.574C1.843,18.336,1.5,17.734,1.5,17.091V6.906C1.498,6.264,1.841,5.662,2.393,5.338l8.704-5.092c0.558-0.327,1.25-0.328,1.81-0.001l8.697,5.091c0.554,0.326,0.896,0.928,0.896,1.57v10.187c-0.002,0.643-0.344,1.241-0.893,1.566l-8.702,5.096C12.627,23.918,12.314,23.999,12.002,23.999z" fill="#a89d9d" className="color000000 svgShape"></path><path d="M14.438,17.152c-2.248,0-4.65-0.775-4.65-2.951c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75c0,1.146,1.98,1.451,3.15,1.451c2.09,0,3.15-0.225,3.15-1.451c0-0.616-0.752-0.857-2.599-1.297l-0.732-0.177c-0.224-0.055-0.461-0.107-0.704-0.161c-1.589-0.351-3.766-0.83-3.766-2.768c0-2.176,2.402-2.951,4.65-2.951s4.65,0.775,4.65,2.951c0,0.414-0.336,0.75-0.75,0.75s-0.75-0.336-0.75-0.75c0-1.146-1.98-1.451-3.15-1.451s-3.15,0.306-3.15,1.451c0,0.678,1.122,0.979,2.589,1.303c0.257,0.057,0.507,0.112,0.742,0.171l0.718,0.173c1.93,0.459,3.752,0.893,3.752,2.756C19.088,17.152,15.947,17.152,14.438,17.152z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
      <p className='skills-p'>Node.js</p>
      </div>
      <div className='single-skill'>
      <svg className='html1' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Html"><path d="M20.387,21.203L22.25,0H1.751H1.75l1.863,21.203L11.973,24L20.387,21.203z M6.702,17.448l-0.32-4.061h2.546l0.187,2.041l2.856,0.777l2.866-0.777l0.32-3.333H6.248l-0.683-7.8h12.871l-0.235,2.555H8.391l0.219,2.647h9.374l-0.727,7.95l-5.226,1.447v0.016h-0.059L6.702,17.448z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
      <p className='skills-p'>HTML5</p>
      </div>
      <div className='single-skill'>
      <svg className='css1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Css"><path d="m1 0 1.275 14.4L8 16l5.723-1.599L15 0H1zm11.274 4.709-.161 1.809-.485 5.424L8 12.944l-.002.001-3.625-1.004-.254-2.836h1.776l.132 1.472 1.971.532.002-.002 1.973-.532.269-2.451-6.208.017-.176-1.677 6.533-.076.132-1.795-6.84.019-.115-1.668h8.864l-.158 1.765z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
      <p className='skills-p'>CSS3</p>
      </div>
      <div className='single-skill'>
      <svg className='sass1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384" id="Sass"><path fill="#a89d9d" d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z" className="colorcf649a svgShape"></path></svg>
    <p className='skills-p'>Sass</p>
    </div>
    <div className='single-skill'>
    <svg className='bootstrap1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Bootstrap"><path fill="#a89d9d" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z" className="color5b4282 svgShape"></path></svg>
    <p className='skills-p'>Bootstrap</p>
    </div>
    <div className='single-skill'>
    <svg className='npm' xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Npm"><path d="M11.511,17H7.598c-0.414,0-0.75-0.336-0.75-0.75v-0.194H0.75c-0.414,0-0.75-0.336-0.75-0.75V7.75C0,7.336,0.336,7,0.75,7h22.5C23.664,7,24,7.336,24,7.75v7.556c0,0.414-0.336,0.75-0.75,0.75H12.261v0.194C12.261,16.664,11.925,17,11.511,17z M8.348,15.5h2.413v-0.194c0-0.414,0.336-0.75,0.75-0.75H22.5V8.5h-21v6.056h6.098c0.414,0,0.75,0.336,0.75,0.75V15.5z" fill="#a89d9d" className="color000000 svgShape"></path><path d="M7.598 16.056c-.414 0-.75-.336-.75-.75V7.75C6.848 7.336 7.184 7 7.598 7s.75.336.75.75v7.556C8.348 15.72 8.012 16.056 7.598 16.056zM14.446 16.056c-.414 0-.75-.336-.75-.75V7.75c0-.414.336-.75.75-.75s.75.336.75.75v7.556C15.196 15.72 14.86 16.056 14.446 16.056zM17.38 16.056c-.414 0-.75-.336-.75-.75v-4.723c0-.414.336-.75.75-.75s.75.336.75.75v4.723C18.13 15.72 17.794 16.056 17.38 16.056zM4.663 16.056c-.414 0-.75-.336-.75-.75v-4.723c0-.414.336-.75.75-.75s.75.336.75.75v4.723C5.413 15.72 5.077 16.056 4.663 16.056zM20.315 16.056c-.414 0-.75-.336-.75-.75v-4.723c0-.414.336-.75.75-.75s.75.336.75.75v4.723C21.065 15.72 20.729 16.056 20.315 16.056zM11.511 13.223c-.414 0-.75-.336-.75-.75v-1.89c0-.414.336-.75.75-.75s.75.336.75.75v1.89C12.261 12.887 11.925 13.223 11.511 13.223z" fill="#a89d9d" className="color000000 svgShape"></path></svg>
    <p className='skills-p'>NPM</p>
    </div>
    <div className='single-skill'>
    <svg className='git' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Git"><path fill="#a89d9d" d="M124.742 58.378l-55.117-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.443 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.049-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11v-34.659c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576l-14.233-14.313-37.754 37.79c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z" className="colorf34f29 svgShape"></path></svg>
    <p className='skills-p'>Git</p>
    </div>
    <div className='single-skill'>
    <svg  className='heroku' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="Heroku"><path fill="#a89d9d" d="M102.1 2h-76.2c-6.6 0-11.9 5.3-11.9 11.9v100.3c0 6.6 5.3 11.9 11.9 11.9h76.3c6.6 0 11.9-5.3 11.9-11.9v-100.3c-.1-6.6-5.4-11.9-12-11.9zm-65.1 106.7v-28.2l14.1 14.1-14.1 14.1zm53 .3h-13.1l.1-.2v-49.4s3.1-11.8-39.7 4.8c-.1.2-.2-45.7-.2-45.7l13.9-.1v29.4s39-15.4 39 11.7v49.5zm-5.2-73h-14.8c5.3-6 10.2-17 10.2-17h15.3s-2.6 7-10.7 17z" className="color6762a6 svgShape"></path></svg>
    <p className='skills-p'>Heroku</p>
    </div>
    </div>

      
    </div>
  </div>
  </div>
  <div className='about-me'>
  <h5 className='about-text'>About Me</h5>
  <br/>
  <p >👩🏻‍💻  When I&apos;m not learning a new programming language,</p>
  <p>🇪🇸  I&apos;m trying to master the Spanish language</p>
  <p>🌎  Keen Traveller</p>
  <p>🏋🏻‍♀️  Aspiring CrossFit Enthusiast</p>
  <p>⚽️  Football Fan</p>
  <p>🌿  Nature Lover</p>
  <p>🌅  Sunset Chaser</p>
  </div>
    </>

  )
}