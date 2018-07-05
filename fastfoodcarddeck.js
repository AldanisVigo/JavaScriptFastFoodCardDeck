/*
    Author: Aldanis Vigo <aldanisvigo@gmail.com> <vigoengineering.tk>
    Description: Fast Food Card Deck using HTML5 Canvas and JavaScript
    Date: Friday, August 18th 2017
    
    License: You may use this code as long as you leave this comment at the top. (GPL v3.0)
    https://www.gnu.org/licenses/gpl-3.0.html
*/
const drawClover = (x,y,ctx)=>{	
	const radius = 10
	const xOffset = 16.5
	const yOffset = 6
	ctx.beginPath()
	ctx.fillStyle = '#000'
	ctx.strokeStyle = '#000'
	ctx.arc(x + 7 - xOffset,y + yOffset,radius,0*Math.PI,2 * Math.PI)
	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.arc(x + radius + 7 - xOffset,y - radius - 3 + yOffset,radius,0*Math.PI,2*Math.PI)
	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.arc(x + (2 * radius) + 7 - xOffset, y + yOffset,radius,0 * Math.PI, 2 * Math.PI)
	ctx.stroke()
	ctx.fill()
	ctx.beginPath()
	ctx.moveTo(x + 0.5,y + 7)
	ctx.lineTo(x - 5,y + 25)
	ctx.lineTo(x + 5, y + 25)
	ctx.fill()
	//Uncomment to view center point
	// ctx.beginPath()
	// ctx.rect(x,y,2,2)
	// ctx.strokeStyle = 'red'
	// ctx.stroke()
	// ctx.fill()
}

const drawSpecialCardLogo = (x,y,whichOne,ctx)=>{
	const burgerKingLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Burger_King_Logo.svg/1200px-Burger_King_Logo.svg.png'
	const dairyQueenLogo = 'https://www.dqcakes.com/app/img/logo_dq.png'
	const jackInTheBoxLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Jack_in_the_Box_2009_logo.svg/1071px-Jack_in_the_Box_2009_logo.svg.png'

	const logos = [
		burgerKingLogo,
		dairyQueenLogo,
		jackInTheBoxLogo
	]
	const logo = new Image()
	logo.src = logos[whichOne]
	logo.onload = function(){
	    ctx.drawImage(logo,0,0,logo.width,logo.height,x - 25,y - 25,50,50)	
	}
	//Uncomment to see center point
	// ctx.beginPath()
	// ctx.rect(x,y,2,2)
	// ctx.fillStyle = 'green'
	// ctx.strokeStyle = 'green'
	// ctx.stroke()
	// ctx.fill()
}	

const drawHeart = (x,y,ctx)=>{
	const radius = 10
	const yOffset = -8
	ctx.beginPath()
	ctx.fillStyle = 'red'
	ctx.strokeStyle = 'red'
	ctx.arc(x - radius,y + yOffset,radius,0 * Math.PI,2 * Math.PI)
	ctx.arc(x + radius,y + yOffset,radius,0 * Math.PI,2 * Math.PI)
	ctx.fillStyle = 'red'
	ctx.fill()
	ctx.beginPath()
	ctx.moveTo(x,y - 8)
	ctx.lineTo(x + (radius * 2 - 0.5),y + 4 + yOffset)
	ctx.lineTo(x, y + 25)
	ctx.lineTo(x - (radius * 2 - 0.5),y + 4 + yOffset)
	ctx.fill()
	//Uncomment to view center point
	// ctx.beginPath()
	// ctx.beginPath()
	// ctx.rect(x,y,2,2)
	// ctx.strokeStyle = 'blue'
	// ctx.stroke()
	// ctx.fill()
}

const drawSpade = (x,y,ctx)=>{
	const yOffset = 14
	const radius = 10
	ctx.beginPath()
	ctx.fillStyle = '#000'
	ctx.strokeStyle = '#000'
	ctx.arc(x - radius,y + yOffset,radius,0 * Math.PI,2 * Math.PI)
	ctx.arc(x + radius,y + yOffset,radius,0 * Math.PI,2 * Math.PI)
	ctx.fill()
	ctx.stroke()
	ctx.moveTo(x,y + 15)
	ctx.lineTo(x - radius - 12.4,y + 10)
	ctx.lineTo(x,y - 17)
	ctx.lineTo(x + radius + 12.4,y + 10)
	ctx.fill()
	ctx.beginPath()
	ctx.moveTo(x,y + 10)
	ctx.lineTo(x - 6,y + 30)
	ctx.lineTo(x + 6, y + 30)
	ctx.fill()
	//Uncomment to view center point
	// ctx.beginPath()
	//ctx.beginPath()
	//ctx.rect(x,y,2,2)
	//ctx.strokeStyle = 'blue'
	//ctx.fillStyle = 'red'
	//ctx.stroke()
	//ctx.fill()
}
const drawDiamond = (x,y,ctx)=>{
	const offset = 18
	const offsetYPeaks = 5
	const offsetYCenter = 5
	ctx.beginPath()
	ctx.fillStyle = 'red'
	ctx.moveTo(x - offset,y + offsetYCenter)
	ctx.lineTo(x,y + offset + offsetYPeaks + offsetYCenter)
	ctx.lineTo(x + offset,y + offsetYCenter)
	ctx.lineTo(x,y - offset - offsetYPeaks + offsetYCenter)
	ctx.lineTo(x - offset, y + offsetYCenter)
	ctx.fill()
	//Uncomment to view center point
	// ctx.beginPath()
	// ctx.beginPath()
	// ctx.rect(x,y,2,2)
	// ctx.strokeStyle = 'blue'
	// ctx.fillStyle = 'red'
	// ctx.stroke()
	// ctx.fill()
}
 class mySquare{
    constructor(x,y,width,height,radius,lineWidth,strokeStyle,fillStyle,ctx){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.ctx = ctx
        this.radius = radius
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
        this.fillStyle = fillStyle
        this.drawSelf()
    }
    drawSelf(){
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.moveTo(this.x + this.radius,this.y)
        this.ctx.lineTo(this.x + this.width - this.radius,this.y)
        
        this.ctx.quadraticCurveTo(this.x + this.width,this.y,this.x + this.width, this.y + this.radius)
        
        this.ctx.lineTo(this.x + this.width, this.y + this.height - this.radius)
        this.ctx.quadraticCurveTo(this.x + this.width,this.y + this.height,this.x + this.width - this.radius, this.y + this.height)
        
        this.ctx.lineTo(this.x + this.radius, this.y + this.height)
        this.ctx.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.radius)
        
        this.ctx.lineTo(this.x, this.y + this.radius)
        this.ctx.quadraticCurveTo(this.x,this.y, this.x + this.radius,this.y)
        
        this.ctx.fillStyle = this.color
        this.ctx.strokeStyle = this.strokeStyle
        this.ctx.fillStyle = this.fillStyle
        this.ctx.fill()
        this.ctx.stroke()
    }
    fallDown(speed){
        this.y = this.y - speed;
    }
}
class Card{
	constructor(x,y,card,suit,ctx){
		this.x = x
		this.y = y
		this.card = card
		this.suit = suit
		this.ctx = ctx
		this.drawSelf()
	}
	drawSelf(){
		//Draw the square border
		const border = new mySquare(this.x,this.y,120,160,3,1,'black','white',this.ctx)
		//Draw the suit logos
		const suitCornerOffset = 26
		switch(this.suit){
			case 'clubs':
				drawClover(this.x + suitCornerOffset,this.y + suitCornerOffset,this.ctx)
				drawClover(this.x + 120 - suitCornerOffset - 1,this.y + 160 - (suitCornerOffset + 5),this.ctx)
			break
			case 'spades':
				drawSpade(this.x + suitCornerOffset,this.y + suitCornerOffset,this.ctx)
				drawSpade(this.x + 120 - suitCornerOffset,this.y + 160 - (suitCornerOffset + 10),this.ctx)

			break
			case 'hearts':
				drawHeart(this.x + suitCornerOffset,this.y + suitCornerOffset,this.ctx)
				drawHeart(this.x + 120 - suitCornerOffset,this.y + 160 - (suitCornerOffset + 10),this.ctx)

			break
			case 'diamonds':
				drawDiamond(this.x + suitCornerOffset,this.y + suitCornerOffset,this.ctx)
				drawDiamond(this.x + 120 - suitCornerOffset,this.y + 160 - (suitCornerOffset + 10),this.ctx)
			break
			default:
			break
		}
		//Draw the card graphic or number in the center

		this.ctx.font = "60px monospace"
		switch(this.card){
			case 'A':
				this.ctx.fillText('A',this.x + 97 - 20,this.y + 54)
			break
			case '2':
				this.ctx.fillText('2',this.x + 97 - 20,this.y + 54)
			break
			case '3':
				this.ctx.fillText('3',this.x + 97 - 20,this.y + 54)
			break
			case '4':
				this.ctx.fillText('4',this.x + 97 - 20,this.y + 54)
			break
			case '5':
				this.ctx.fillText('5',this.x + 97 - 20,this.y + 54)
			break
			case '6':
				this.ctx.fillText('6',this.x + 97 - 20,this.y + 54)
			break
			case '7':
				this.ctx.fillText('7',this.x + 97 - 20,this.y + 54)
			break
			case '8':
				this.ctx.fillText('8',this.x + 97 - 20,this.y + 54)
			break
			case '9':
				this.ctx.fillText('9',this.x + 97 - 20,this.y + 54)
			break
			case '10':
				this.ctx.fillText('10',this.x + 65 - 20,this.y + 54)
			break
			case 'J':
				this.ctx.fillText('J',this.x + 97 - 20,this.y + 54)
				drawSpecialCardLogo(this.x + 60,this.y + 80,2,this.ctx)
			break
			case 'Q':
				this.ctx.fillText('Q',this.x + 97 - 20,this.y + 54)
				drawSpecialCardLogo(this.x + 60,this.y + 80,1,this.ctx)
			break
			case 'K':
				this.ctx.fillText('K',this.x + 97 - 20,this.y + 54)
				drawSpecialCardLogo(this.x + 60,this.y + 80,0,this.ctx)
			break
		}
	}
}
$(document).ready(function(){	
	//Get a reference to the canvas from the DOM
	const canvas = document.getElementById('blackjack')
	const body = document.getElementsByTagName('body')
	$(body).prepend("<p>By: Aldanis Vigo [aldanisvigo@gmail.com]</p>")
	$(body).prepend("<h1>Fast Food Card Deck</h1>")
	//Change the body background color to grey
	$(body).attr('bgcolor','lightblue')
	//Give the canvas an outset border style
	//$(canvas).css('border','3px outset orange')
	$(canvas).attr('width','530px')
	$(canvas).attr('height','2400px')
	//Get the canvas context
	const ctx = canvas.getContext('2d')
	const cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
	let deck = []
	const heartsX = 10
	const diamondsX = heartsX + 130
	const clubsX = diamondsX + 130
	const spadesX = clubsX + 130
	let startingY = 10
	for(let currentCard = 0;currentCard < cardValues.length;currentCard++){
		const hearts = new Card(heartsX,startingY,cardValues[currentCard],'hearts',ctx)
	    const diamonds = new Card(diamondsX,startingY,cardValues[currentCard],'diamonds',ctx)
		const clubs = new Card(clubsX,startingY,cardValues[currentCard],'clubs',ctx)
		const spades = new Card(spadesX,startingY,cardValues[currentCard],'spades',ctx)
		startingY += 180
	}
})