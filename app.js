gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

let lineOne = gsap.timeline({
  scrollTrigger:{
    trigger:'.line-one',
    scrub:true,
    // markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})

lineOne.from(".line-one span", {
  y:'100vh',duration:1,stagger:.2
})
.to(".line-one",{
  backgroundColor:'yellow',duration:1
},'>')
.fromTo('.sun',{
  x:'100vw',duration:1
},{left:'-200'})
.to('.sun',{
  x:'-100vw',duration:1
})
.to('.line-one span',{x:'100vw',duration:1},'<')


let lineTwo = gsap.timeline({
  scrollTrigger:{
    trigger:'.line-two',
    scrub:true,
    // markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})

lineTwo.from('.line-two span:first-child',{
  x:'-100vw',opacity: 0, scale: 10
})
.from('.line-two span:last-child', { x:'100vw',opacity: 0, scale: 10 }, '<')
.to('.line-two span:first-child',{
  y:'10px'
})
.to('.line-two span:first-child',{
  y:'0px'
})
.to('.line-two span:last-child',{
  y:'-10px'
})
.to('.line-two span:last-child',{
  y:'0px'
})


let lineThree = gsap.timeline({
  scrollTrigger:{
    trigger:'.line-three',
    scrub:true,
    markers:true,
    pin:true,
    start:'top',
    end:'bottom',
  }
})

lineThree.from(".line-three span", {y:'100vh',duration:1,stagger:.2})
        .to(".line-three", {backgroundPositionX: '0%', duration: 1,color:'white'}, '>')
        .fromTo('.moon',{
          x:'100vw',duration:1
        },{left:'-200'})
        


