const calcBtn = document.getElementById('btn');
const requiredPercentage = document.getElementById('percentage');
const presentDays = document.getElementById('present');
const totalDays = document.getElementById('total');
const outputDiv = document.getElementById('output')

calcBtn.addEventListener("click", () => {
	let total = parseInt(totalDays.value);
	let present = parseInt(presentDays.value);
	let percentage = parseInt(requiredPercentage.value)

	if (isNaN(present) || isNaN(percentage) || isNaN(total)) {
		return (outputDiv.innerText = "Insert proper values!");
	}
	if (presentDays > totalDays || totalDays <= 0 || presentDays < 0) {
		return (outputDiv.innerText = "Insert proper values!");
	}
	let classesToGO = classesToTarget(present, total, percentage);
	console.log(classesToGO);
	return (outputDiv.innerText = `To reach target ${classesToGO}`);

});

function classesToTarget(attended, total, targetPercentage) {
	const target = targetPercentage / 100;
	if (total === 0) return 0;
	const current = attended / total;
	if (current === target) return 0;

	if (current < target) {
		return Math.ceil((target * total - attended) / (1 - target));
	} else {
		return -Math.floor((attended - target * total) / target);
	}

}

