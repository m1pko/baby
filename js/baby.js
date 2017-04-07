//Regional settings

moment.locale('pt');

//Global variables

var stDayOne = "2017-02-17";

var now = moment();

var dayOne = moment(stDayOne);

var beginning = moment(stDayOne).format('dddd, D MMMM YYYY');

var dueDateLowerLimit = moment('2017-11-17').format('D MMMM YYYY');

var dueDateUpperLimit = moment('2017-11-24').format('D MMMM YYYY');

//Functions

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

function isThereAnyMilestoneToday()
{
	var mileStoneArray = new Array();
	for (var i = 0; i < 8; i++)
	{
		mileStoneArray[i] = moment(stDayOne).add(i,'M');
	}

	for (i = 0; i < 8; i++)
	{
		if (mileStoneArray[i].isSame(moment().format('MM-DD-YYYY')))
		{
			switch(i) 
			{
			    case 0:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 1:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 2:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 3:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 4:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 5:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 6:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			    case 7:
			        return 'Faz hoje ' + i + ' meses que tudo começou!';
			}
		}
	}

	//else
	return 'Hoje não há nenhuma data a assinalar!';

}

function timeToReachMilestone(milestone)
{
	var untilMilestone = moment.duration((moment(stDayOne).add(milestone,'M')).diff(now));
	return 'Faltam ' + untilMilestone.months() + ' meses e ' + untilMilestone.days() + ' dias para os ' + milestone + ' meses.';
}


function dueDate()
{
	return 'Deverá nascer entre ' + dueDateLowerLimit + ' e ' + dueDateUpperLimit + '.';
}

