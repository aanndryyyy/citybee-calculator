# Calculator for CityBee

## Updating prices
Use the following script to get pricess from CityBee pricing page https://citybee.ee/ee/hinnad/.

```js
var select = document.querySelector('[name="cars"]');
var option = select.firstChild;
var output = [];

while ( option ) {

  if ( option.nodeType !== 1 || option === select ) {
    option = option.nextSibling;
    continue;
  }
  
  output.push({
    name: option.label,
    type: option.dataset.category,
    price: {
      km: parseFloat( option.dataset.km ),
      minute: parseFloat( option.dataset.min ),
      hour: parseFloat( option.dataset.hour ),
      day: parseFloat( option.dataset.day ),
    }
  });
        
  option = option.nextSibling;
}

copy(output);
```

## Note to self
CityBee pricing logic from their website https://citybee.ee (https://citybee.ee/wp-content/themes/citybee/resources/scripts/app.js).

```js
let carPricingCalculator = (prices, form) => {
  // calculate kilometers price

  let km_price;
  let km_value = parseFloat(form.find('input[name=car-calculate-km]').val());

  if (km_value > 0) {
    km_price = km_value * prices.distance.km;
  } else {
    km_price = 0;
  }

  // calculate mins price

  let mins_input = form.find('input[name=car-calculate-mins]');
  let min_price;
  let min_value = parseInt(mins_input.val()) || 0;

  if (min_value > 59) {
    min_value = mins_input.val('59');
    mins_input.parent().addClass('shake-animation');
    setTimeout(function () {
      mins_input.parent().removeClass('shake-animation');
    }, 500);
  }

  if (min_value * prices.min <= prices.hour) {
    min_price = min_value * prices.min;
  } else {
    min_price = prices.hour;
  }

  // calculate hours price

  let hour_input = form.find('input[name=car-calculate-hours]');
  let hour_price;
  let hour_value = parseInt(hour_input.val()) || 0;

  if (hour_value > 23) {
    hour_value = hour_input.val('23');

    hour_input.parent().addClass('shake-animation');
    setTimeout(function () {
      hour_input.parent().removeClass('shake-animation');
    }, 500);
  }

  if (hour_value * prices.hour + min_price <= prices.day) {
    hour_price = hour_value * prices.hour;
  } else {
    min_price = 0;
    hour_price = prices.day;
  }

  // calculate days price

  let days_price;

  let days_input = form.find('input[name=car-calculate-days]');
  let days_value = parseInt(days_input.val()) || 0;
  // let weeksCount = calculateObject(days_value).weeks;
  let daysCount = calculateObject(days_value).days;

  if (prices.category.includes('cargo')) {
    if (days_value >= 7) {
      $('.info-window-plan').addClass('is-active');
    } else {
      $('.info-window-plan').removeClass('is-active');
    }
  } else {
    if (days_value >= 1) {
      $('.info-window-plan').addClass('is-active');
    } else {
      $('.info-window-plan').removeClass('is-active');
    }
  }

  if (min_price + hour_price <= prices.day) {
    days_price = days_value * prices.day;
  } else {
    min_price = 0;
    hour_price = 0;
    days_price = prices.day * days_value;
  }

  // if (days_value < 7) {
  //   if (((min_price + hour_price) + (days_value * prices.day)) <= prices.week) {
  //     days_price = days_value * prices.day;
  //   } else {
  //     min_price = 0;
  //     hour_price = 0;
  //     days_price = prices.week;
  //   }
  // } else if (days_value >= 7 && days_value < 30) {
  //   if (((weeksCount * prices.week) + (daysCount * prices.day) + (min_price + hour_price)) >= prices.month) {
  //     min_price = 0;
  //     hour_price = 0;
  //     days_price = prices.month;
  //   } else {
  //     if ((daysCount * prices.day) + (min_price + hour_price) >= prices.week) {
  //       min_price = 0;
  //       hour_price = 0;
  //       days_price = prices.week + (weeksCount * prices.week);
  //     } else {
  //       days_price = daysCount * prices.day + (weeksCount * prices.week);
  //     }
  //   }
  // } else if (days_value >= 30) {
  //   if (days_value === 30) {
  //     days_price = prices.month;
  //   } else {
  //     let m = 0;
  //     let w = 0;
  //     let d = 0;
  //
  //     // calculate months price
  //
  //     if (calculateObject(days_value).months > 0) {
  //       m = calculateObject(days_value).months * prices.month;
  //     }
  //
  //     // calculate weeks price
  //
  //     if (calculateObject(days_value).weeks > 0) {
  //       if (((calculateObject(days_value).weeks * prices.week) + (min_price + hour_price)) >= prices.month) {
  //         min_price = 0;
  //         hour_price = 0;
  //         w = prices.month;
  //       } else {
  //         w = calculateObject(days_value).weeks * prices.week;
  //       }
  //     }
  //
  //     // calculate days price
  //
  //     if (calculateObject(days_value).days > 0) {
  //       if (((calculateObject(days_value).days * prices.day) + (min_price + hour_price)) >= prices.week) {
  //         min_price = 0;
  //         hour_price = 0;
  //         d = prices.week;
  //       } else {
  //         d = calculateObject(days_value).days * prices.day;
  //       }
  //     }
  //
  //     // calculate result price
  //
  //     days_price = m + w + d;
  //   }
  // } else {
  //   days_price = 0;
  // }

  // calculate time price

  let time_price = min_price + hour_price + days_price;
  // let time_price = min_price + hour_price;

  if (!time_price && !km_price) {
    return returnFixedPrice(0);
  }

  let trip_fee = prices.tripFee;

  if (prices.minFee > time_price + km_price + trip_fee) {
    return returnFixedPrice(prices.minFee);
  }

  // return result

  return returnFixedPrice(km_price + time_price + trip_fee);
};
