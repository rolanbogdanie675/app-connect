/*
Filename: AdvancedDataVisualization.js

This code demonstrates advanced data visualization techniques using JavaScript. It creates an interactive data visualization dashboard using D3.js library, which showcases various data analytics visualizations.

*/

// Define the size of the visualization area
const width = 800;
const height = 600;

// Add an SVG container to the body of the HTML document
const svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Load data from an external file (JSON, CSV, etc.)
d3.json("data.json").then(data => {
  // Data preprocessing and manipulation

  // Use scales to map data to visual properties
  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0, width]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, height])
    .padding(0.1);

  // Create axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Append axis groups to the SVG container
  const xAxisGroup = svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);

  const yAxisGroup = svg.append("g")
    .call(yAxis);

  // Create a responsive tooltip
  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("display", "none");

  // Create bars for each data point
  const bars = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", d => yScale(d.category))
    .attr("width", d => xScale(d.value))
    .attr("height", yScale.bandwidth())
    .attr("fill", "steelblue")
    .on("mouseover", (d, i, nodes) => {
      // Highlight the hovered bar and show tooltip
      d3.select(nodes[i])
        .attr("fill", "orange");

      tooltip
        .style("display", "block")
        .html(`Value: ${d.value}`);
    })
    .on("mouseout", (d, i, nodes) => {
      // Revert bar color and hide tooltip
      d3.select(nodes[i])
        .attr("fill", "steelblue");

      tooltip
        .style("display", "none");
    });

  // Add animation to the bars
  svg.selectAll("rect")
    .transition()
    .duration(1000)
    .attr("x", 0)
    .attr("width", d => xScale(d.value));

  // Create a legend for the visualization
  const legend = svg.append("g")
    .attr("transform", `translate(${width-120}, 20)`);

  legend.append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("fill", "steelblue");

  legend.append("text")
    .attr("x", 30)
    .attr("y", 15)
    .text("Value");

  // Add interactivity to the legend
  legend.on("click", () => {
    const isVisible = bars.style("display") === "none";
    bars.style("display", isVisible ? "block" : "none");
  });
});

// CSS styles for the tooltip
const tooltipStyles = `
.tooltip {
  position: absolute;
  background-color: #f9f9f9;
  border: 1px solid #cecece;
  padding: 5px;
  pointer-events: none;
}`;
  
// Append the tooltip styles to the head of the HTML document
d3.select("head")
  .append("style")
  .html(tooltipStyles);