import React, { Component } from "react";
import {
	Segment,
	Grid,
	Header,
	Image,
	Button,
	List,
	Container,
	Divider,
	Menu,
	Icon,
	ItemGroup,
	Item,
	ItemImage,
} from "semantic-ui-react";
import services1 from "./assets/services1.png";
import services2 from "./assets/services2.png";
import services3 from "./assets/services3.png";
import services4 from "./assets/services4.png";
import services5 from "./assets/services5.png";
import services6 from "./assets/services6.png";
import backdrop from "./assets/backdrop.png";
import logo from "./assets/logo.png";
import PropTypes from "prop-types";

const primaryCol = "#47c563";
const secondaryCol = "#3d4a65";

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
	<Container text>
		<Header
			as="h1"
			content=""
			inverted
			style={{
				fontSize: mobile ? "2em" : "4em",
				fontWeight: "normal",
				marginBottom: 0,
				marginTop: mobile ? "1.5em" : "3em",
			}}
		/>
		<Image centered src={logo} />
		<Header
			as="h2"
			content="Placeholder subheader text over here"
			inverted
			style={{
				fontSize: mobile ? "1.5em" : "1.7em",
				fontWeight: "normal",
				marginTop: mobile ? "0.5em" : "1.5em",
			}}
		/>
		<Button
			size="huge"
			style={{ backgroundColor: primaryCol, color: "white" }}
		>
			Get Started
			<Icon name="right arrow" />
		</Button>
	</Container>
);

HomepageHeading.propTypes = {
	mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
	state = {};

	toggleFixedMenu = inView => this.setState({ fixed: !inView });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<>
				<Segment
					inverted
					textAlign="center"
					style={{
						minHeight: 700,
						padding: "1em 0em",
						backgroundImage: `url(${backdrop})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "100% 100%",
						backgroundAttachment: "fixed",
					}}
					vertical
				>
					<Menu
						fixed={fixed ? "top" : null}
						inverted={!fixed}
						pointing={!fixed}
						secondary={!fixed}
						size="large"
					>
						<Container>
							<Menu.Item as="a" active>
								Home
							</Menu.Item>
							<Menu.Item as="a">Work</Menu.Item>
							<Menu.Item as="a">Company</Menu.Item>
							<Menu.Item as="a">Careers</Menu.Item>
							<Menu.Item position="right">
								<Button as="a" inverted={!fixed}>
									Log in
								</Button>
								<Button
									as="a"
									inverted={!fixed}
									primary={fixed}
									style={{ marginLeft: "0.5em" }}
								>
									Sign Up
								</Button>
							</Menu.Item>
						</Container>
					</Menu>
					<HomepageHeading />
				</Segment>
				{children}
			</>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
};

const Home = () => (
	<DesktopContainer>
		{/* <Segment style={{ padding: "8em 0em" }} vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							We Help Companies and Companions
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							We can give your company superpowers to do things
							that they never thought possible. Let us delight
							your customers and empower your needs... through
							pure data analytics.
						</p>
						<Header as="h3" style={{ fontSize: "2em" }}>
							We Make Bananas That Can Dance
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Yes that's right, you thought it was the stuff of
							dreams, but even bananas can be bioengineered.
						</p>
					</Grid.Column>
					<Grid.Column floated="right" width={6}>
						<Image
							bordered
							rounded
							size="large"
							src="/images/wireframe/white-image.png"
						/>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="center">
						<Button size="huge">Check Them Out</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment> */}

		<Segment style={{ padding: "0em" }} vertical>
			<Grid celled="internally" columns="equal" stackable>
				<Grid.Row textAlign="center">
					<Grid.Column
						style={{ paddingBottom: "5em", paddingTop: "5em" }}
					>
						<Header as="h3" style={{ fontSize: "2.5em" }}>
							OUR{" "}
							<span style={{ color: primaryCol }}>MISSION</span>
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Empowering businesses with data-driven digital
							marketing automation to build customer
							relationships, fostering personalized experiences,
							growth, and loyalty
						</p>
					</Grid.Column>
					<Grid.Column
						style={{ paddingBottom: "5em", paddingTop: "5em" }}
					>
						<Header as="h3" style={{ fontSize: "2.5em" }}>
							OUR <span style={{ color: "#3c7c5c" }}>VISION</span>
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Our vision is to help people and businesses harness
							technology and data to create genuine, meaningful
							connections with their audiences
						</p>
					</Grid.Column>
					<Grid.Column
						style={{ paddingBottom: "5em", paddingTop: "5em" }}
					>
						<Header as="h3" style={{ fontSize: "2.5em" }}>
							OUR <span style={{ color: "#325850" }}>VALUES</span>
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Our values are rooted in a commitment to data-driven
							decision-making, analytical precision, and
							technological innovation. 
							<br />
							We focus on leveraging these strengths to improve
							customer relationships, ensuring our clients benefit
							from meaningful and effective solutions
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{ padding: "8em 0em" }} vertical>
			<Header as="h3" style={{ fontSize: "2.5em", marginBottom: 0 }}>
				WHY CHOOSE{" "}
				<span style={{ color: primaryCol }}>JAWAB DIGITAL? </span>
			</Header>
			<Header as="h3" style={{ fontSize: "2.5em", marginTop: 0 }}>
				GROWTH, UNDERSTANDING YOUR NEEDS
			</Header>

			<Container text>
				<p style={{ fontSize: "1.33em" }}>
					Companies often struggle to integrate and optimize digital
					marketing tools, leading to inefficiencies and missed
					opportunities. The challenge lies in navigating a complex
					array of technologies without losing sight of strategic
					marketing goals. This gap in effective tool utilization and
					integration hinders achieving seamless customer engagement
					and marketing success.
				</p>
				<Button
					as="a"
					size="large"
					style={{ backgroundColor: secondaryCol, color: "white" }}
				>
					Read More
				</Button>
				<Divider
					as="h4"
					className="header"
					horizontal
					style={{
						margin: "3em 0em",
						textTransform: "uppercase",
					}}
				>
					<a href="#">Case Studies</a>
				</Divider>
				<Header as="h3" style={{ fontSize: "2em" }}>
					Bridging the Gap
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					We specialize in custom digital marketing automation
					solutions, addressing the unique challenges of each
					business. By simplifying the digital marketing landscape, we
					enable clients to focus on strategic objectives, leveraging
					integrated solutions for more coherent and impactful
					marketing efforts.
				</p>
				<Button
					as="a"
					size="large"
					style={{ backgroundColor: secondaryCol, color: "white" }}
				>
					Read More
				</Button>
			</Container>
		</Segment>

		<Segment style={{ padding: "4em 8em" }} size="big" basic>
			<Grid columns={2} stackable textAlign="left">
				<Grid.Row style={{ paddingBottom: "4em" }}>
					<Grid.Column width={16}>
						<Header
							as="h1"
							textAlign="center"
							style={{
								color: secondaryCol,
								fontSize: "2.5em",
								marginBottom: 0,
							}}
						>
							EMPOWERING GROWTH,
						</Header>
						<Header
							as="h1"
							textAlign="center"
							style={{
								color: primaryCol,
								fontSize: "2.5em",
								marginTop: 0,
							}}
						>
							OUR COMPREHENSIVE SERVICES
						</Header>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{ paddingBottom: "2em", paddingTop: "1em" }}>
					<Grid.Column>
						<Item.Group>
							<Item>
								<ItemImage src={services1} size="small" />
								<Item.Content>
									<Item.Header
										as="h3"
										style={{ color: secondaryCol }}
									>
										Marketing Tech Consultation & Execution
									</Item.Header>
									<Item.Description>
										Our marketing tech consultation services
										help you navigate the evolving landscape
										of marketing technologies. We assess
										your current tech stack, pinpoint gaps,
										and implement solutions to streamline
										processes and boost efficiency.
									</Item.Description>
								</Item.Content>
							</Item>
						</Item.Group>
					</Grid.Column>

					<Grid.Column>
						<ItemGroup>
							<Item>
								<ItemImage src={services4} size="small" />
								<Item.Content>
									<Item.Header
										as="h3"
										style={{ color: secondaryCol }}
									>
										Data Analysis
									</Item.Header>
									<Item.Description>
										Data drives our approach to marketing.
										We analyze raw data to extract
										actionable insights, measuring campaign
										performance, understanding customer
										behavior, and identifying areas for
										optimization, helping you make informed
										decisions.
									</Item.Description>
								</Item.Content>
							</Item>
						</ItemGroup>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={{ paddingBottom: "2em", paddingTop: "1em" }}>
					<Grid.Column>
						<ItemGroup>
							<Item>
								<ItemImage src={services2} size="small" />
								<Item.Content>
									<Item.Header
										as="h3"
										style={{ color: secondaryCol }}
									>
										Market Research
									</Item.Header>
									<Item.Description>
										Our comprehensive market research dives
										deep into understanding your target
										market, competitors, and industry
										trends. Through qualitative and
										quantitative methods, we gather insights
										to shape data-driven strategies tailored
										to your business needs.
									</Item.Description>
								</Item.Content>
							</Item>
						</ItemGroup>
					</Grid.Column>
					<Grid.Column>
						<ItemGroup>
							<Item>
								<ItemImage src={services5} size="small" />
								<Item.Content>
									<Item.Header
										as="h3"
										style={{ color: secondaryCol }}
									>
										Email Marketing
									</Item.Header>
									<Item.Description>
										We craft tailored email campaigns that
										resonate with decision-makers, nurture
										leads through the sales funnel, and
										drive engagement with insightful
										content. Our strategies aim to
										strengthen relationships, increase
										conversions, and position your brand as
										a trusted industry leader among
										businesses.
									</Item.Description>
								</Item.Content>
							</Item>
						</ItemGroup>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row style={{ paddingBottom: "2em", paddingTop: "1em" }}>
					<Grid.Column>
						<ItemGroup>
							<Item>
								<ItemImage src={services3} size="small" />
								<Item.Content>
									<Item.Header
										as="h3"
										style={{ color: secondaryCol }}
									>
										Strategic Marketing Planning
									</Item.Header>
									<Item.Description>
										We develop a robust marketing strategy
										that aligns with your business
										objectives. Our planning services
										outline clear goals, target audiences,
										messaging, and KPIs, ensuring every
										marketing effort is purposeful and
										aligned with your goals.
									</Item.Description>
								</Item.Content>
							</Item>
						</ItemGroup>
					</Grid.Column>
					<Grid.Column>
						<ItemGroup>
							<Item>
								<ItemImage src={services6} size="small" />
								<Item.Content>
									<Item.Header
										as="h3"
										style={{ color: secondaryCol }}
									>
										SEO/SEM
									</Item.Header>
									<Item.Description>
										Boost your online presence with our
										SEO/SEM services. We optimize your
										website for search engines using
										white-hat techniques and run targeted
										paid search campaigns to increase
										visibility, improve rankings, and drive
										quality traffic to your site. Through
										strategic paid search campaigns, we
										increase visibility among
										decision-makers, driving quality traffic
										and positioning your brand as a leader
										in the industry.
									</Item.Description>
								</Item.Content>
							</Item>
						</ItemGroup>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment inverted vertical style={{ padding: "5em 0em" }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="About" />
							<List link inverted>
								<List.Item as="a">Sitemap</List.Item>
								<List.Item as="a">Contact Us</List.Item>
								<List.Item as="a">Footer Link</List.Item>
								<List.Item as="a">Footer Link</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Services" />
							<List link inverted>
								<List.Item as="a">Footer Link</List.Item>
								<List.Item as="a">Footer Link</List.Item>
								<List.Item as="a">Footer Link</List.Item>
								<List.Item as="a">Footer Link</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							<Header as="h4" inverted>
								Footer Header
							</Header>
							<p>
								Extra space for a call to action inside the
								footer that could help re-engage users.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	</DesktopContainer>
);

export default Home;
