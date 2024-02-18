// Use D3 to read in samples.json from the provided URL
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(function(data) {
    // Once the data is fetched successfully, you can work with it here
    console.log(data);