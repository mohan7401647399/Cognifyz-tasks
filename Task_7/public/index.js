async function checkLogin() {
    const res = await fetch('/user');
    if (res.ok) {
        const user = await res.json();
        document.getElementById('user-name').innerText = user.displayName;
        document.getElementById('auth-area').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    }
}

async function getWeather() {
    const city = document.getElementById('city').value;
    const res = await fetch(`/api/weather/${city}`);
    const data = await res.json();
    if (res.ok) {
        document.getElementById('result').innerHTML = `
          <p>Temp: ${data.main.temp}°C</p>
          <p>Condition: ${data.weather[0].description}</p>
        `;
    } else {
        document.getElementById('result').innerText = data.error;
    }
}

checkLogin();