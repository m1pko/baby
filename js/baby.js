moment.locale('pt');

var now = moment().format('dddd, D MMMM  YYYY');

var day = moment('2017-02-17');

var strBeginning = '20170217';

var beginning = day.format('dddd, D MMMM YYYY');

var dueDate = moment().format('dddd, D MMMM YYYY');

function thisMoment()
{
	return now;
}

function whenItAllStarted()
{
	return window.beginning;
}

function untilNow()
{
  return moment(window.now).diff(window.beginning, 'months', true);
}
