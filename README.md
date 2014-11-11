#prettySticky

Sticky navigation jQuery plugin with smart anchor link highlighting and logo incorporated

====

##1. Download 
Download `prettySticky.js` and `prettySticky.css`

##2. Setup
Include reference to `prettySticky.css` within your `head` tags.

Include reference to the jQuery library, jQuery plugin `smooth-scroll.js`(optional) and `prettySticky.js` at the bottom of the HTML page before the `</body>` tag, as seen below.

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="scripts/prettySticky.js"></script>
	<script src="scripts/jquery.smooth-scroll.js"></script>
	<script src="scripts/scripts.js"></script>
	</body>
	</html>

For details on smooth-scroll, <a href="https://github.com/kswedberg/jquery-smooth-scroll">click here</a>

##3. HTML Markup
To properly use prettySticky, setup the usual HTML markup for your navigation. Add as many list items as your page requires. In order for `prettySticky.js` to work, you must add `class="nav"` to the li elements and nest the ul inside a div with `class="menu"` as seen below. 

	<nav>
		<div class="menu">
			<ul>
				<li class="nav">
					<a href="#section1">Section One</a>
				</li>
				<li class="nav">
					<a href="#section2">Section Two</a>
				</li>
				<li class="nav">
					<a href="#section3">Section Three</a>
				</li>
			</ul>
		</div
	</nav>
	

prettySticky is also set up to have a logo appear on the left side of the nav bar on scroll. In order for that to function, include a logo in the `nav`, nest the logo in its own `div` and give the logo a class of `class="logo"`, as seen below.

	<nav>
		<div>
			<img src="link to logo" class="logo">
		</div>
		<div class="menu">
			<ul>
				<li class="nav">
					<a href="#section1">Section One</a>
				</li>
				<li class="nav">
					<a href="#section2">Section Two</a>
				</li>
				<li class="nav">
					<a href="#section3">Section Three</a>
				</li>
			</ul>
		</div>
	</nav>


##4. CSS
The CSS document includes the styling for your nav menu and everythign you need for `prettySticky.js` to function, below are the default options you may choose to override in your own stylesheet. 

To change the font-size of the list items at the top of the page:
	
	nav {
		font-size:/*Select Size*/
	}

To change the background color of the nav menu and the font-size of the list items on scroll:

	nav.navScroll {
		background: /*Select Color*/
		font-size: /*Select Size*/
	}

To change the size of the logo in the nav menu:

	img.logoScroll {
		width: /*Select width*/
	}

To change the color of the anchor links in the nav menu:

	li.nav a {
		color:/*Select Color*/
	}

To change the color of the anchor links on hover:

	li.nav a:hover {
		color:/*Select Color*/
	}
	
To change the color of the highlighted anchor links when scrolling:

	.navScroll a.selected {
		color:/*Select Color*/
	}


===
###Example
If you want to see prettySticky in action - <a href="http://moyamiller.com/prettySticky/">visit the example site here.</a>

###Contact
<a href="http://moyamiller.com">moyamiller.com</a>

<a href="http://twitter.com/moyamiller">@moyamiller</a>
