<html>
<body>
  <li data-time="1:10">
  Video 50
</li>

<li data-time="6:10">
  Video 51
</li>

<li data-time="2:14">
  Video 52
</li>

<script>
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  console.log(timeNodes);

  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(":").map(parseFloat);
      return (mins * 60) + secs;
      console.log(mins, secs);
    })
    .reduce((total, vidSeconds) => return total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft)

</script>
</body>
</html>
