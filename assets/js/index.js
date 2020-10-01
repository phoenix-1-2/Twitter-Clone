$(window).on('load',function(){
    $('#modalLoginForm').modal('show');
});

function auto_grow(element) {
    if(document.getElementById('tweet').value.length==0){
        document.getElementById('submit').style.opacity=0.5;
        document.getElementById('submit').disabled = true;
    }
    else{
        document.getElementById('submit').style.opacity=1;
        document.getElementById('submit').disabled = false;
    }
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

if(document.getElementById('tweet').value.length==0){
    document.getElementById('submit').style.opacity=0.5;
    document.getElementById('submit').disabled = true;
}

function auto_grow_tweet(element) {
    if(document.getElementById('tweet_tweet').value.length==0){
        document.getElementById('submit_tweet').style.opacity=0.5;
        document.getElementById('submit_tweet').disabled = true;
    }
    else{
        document.getElementById('submit_tweet').style.opacity=1;
        document.getElementById('submit_tweet').disabled = false;
    }
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}


if(document.getElementById('tweet_tweet').value.length==0){
    document.getElementById('submit_tweet').style.opacity=0.5;
    document.getElementById('submit_tweet').disabled = true;
}
$('.red').click( function(){
    $('.heart').toggleClass('fill')
} )
function auto_grow_reply(element) {
    if(document.getElementById('reply').value.length==0){
        document.getElementById('submit_reply').style.opacity=0.5;
        document.getElementById('submit_reply').disabled = true;
    }
    else{
        document.getElementById('submit_reply').style.opacity=1;
        document.getElementById('submit_reply').disabled = false;
    }
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
is_following = false;

$('.add_color').click(function(){


    if(is_following){
        document.getElementsByClassName("add_color")[0].innerText = "Follow";
        $('.add_color').removeClass('btn-outline-primary-fill ');
        is_following = false;
    }
    else{
        document.getElementsByClassName("add_color")[0].innerText = "Following";
        $('.add_color').addClass('btn-outline-primary-fill');
        is_following = true;
    }

    
 
 })