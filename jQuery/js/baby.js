//Regional settings

moment.locale('pt');

//Global variables

var stDayOne = "2017-02-11";

var now = moment();

var dayOne = moment(stDayOne);

var beginning = moment(stDayOne).format('dddd, D MMMM YYYY');

var deliveryDate = moment('2017-11-18').format('D MMMM YYYY');

//Functions

function whenItAllStarted()
{
	return 'Tudo começou a ' + beginning + '.';
}

function thisMoment()
{
	return 'Hoje é ' + moment().format('dddd, D MMMM YYYY') + '.';
}


function untilNow()
{
	var timeSoFar = moment.duration(moment().diff(dayOne));
	var weeksPassed = now.diff(dayOne, 'week');
	return 'Até hoje já passaram ' + timeSoFar.months() + ' meses e ' + timeSoFar.days() + ' dias ou ' +  weeksPassed + ' semanas se preferirem.';

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
	var stMilestone = null;
    if (untilMilestone.days() < 0)
    {
    	stMilestone = 'Os ' + milestone + ' meses já lá vão!';
    }
    else if (untilMilestone.days() == 0)
    {
    	stMilestone = 'Já passaram exactamente ' + milestone + ' meses!';
    }
    else
    {
    	stMilestone ='Faltam ' + untilMilestone.months() + ' meses e ' + untilMilestone.days() + ' dias para os ' + milestone + ' meses.';
    }

    return stMilestone;
}


function dueDate()
{
	return 'Está previsto para ' + deliveryDate + '.';
}

