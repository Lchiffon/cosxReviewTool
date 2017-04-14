console.log(1)
var f = document.querySelector('#diff-0 > div.file-header > div.file-info > a').title.trim().replace(/.*\/|\.md$/g, '').replace(/^([0-9]{4})-([0-9]{2})-([0-9]{2})-(.*)$/g, '$1/$2/$4')
var i = location.pathname.replace(/^.*pull\/|\/files.*/g, '')
window.open('https://deploy-preview-' + i + '--cosx.netlify.com/' + f)
