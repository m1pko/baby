moment.locale('pt');

//Global variables

var dayOne = moment([2017,01,17]);

var beginning = moment('2017-02-17').format('dddd, D MMMM YYYY');

var dueDateLowerLimit = moment('2017-11-17').format('D MMMM YYYY');

var dueDateUpperLimit = moment('2017-11-24').format('D MMMM YYYY');

function thisMoment()
{
	return moment().format('dddd, D MMMM YYYY');
}

function whenItAllStarted()
{
	return beginning;
}

function untilNow()
{
	var timeSoFar = moment.duration(moment().diff(dayOne));
	return timeSoFar.months() + ' meses e ' + timeSoFar.days() + ' dias.';
}

function timeToReachMilestone(milestone)
{
	var timeTothreeMonths = moment.duration((dayOne.add(milestone,'M')).diff(moment()));
	return 'Faltam ' + timeTothreeMonths.months() + ' meses e ' + timeTothreeMonths.days() + ' dias para os ' + milestone + ' meses.';
}

function dueDate()
{
	return 'Deverá nascer entre ' + dueDateLowerLimit + ' e ' + dueDateUpperLimit + '.';
}

