const reviews=[
    'Best homemade food in Pune!',
    'Fresh, hygienic and affordable.',
    'Veg Thali with Cold Coffee is amazing!',
    'Feels like home-cooked food.'
    ];
    let i=0;
    setInterval(()=>{
    document.getElementById('reviewBox').innerText=reviews[i];
    i=(i+1)%reviews.length;
    },3000);
    
    document.getElementById('themeToggle').onclick=()=>{
    document.body.classList.toggle('dark');
    };
    