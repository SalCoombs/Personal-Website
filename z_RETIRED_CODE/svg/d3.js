const data = [10, 20, 30];

d3.select("body").append("h1").text("Hello from js. I hope this works");

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 40)
  .attr("fill", "blue");
