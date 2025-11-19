import Code2 from 'lucide-svelte/icons/code-2';
import FileText from 'lucide-svelte/icons/file-text';
import Bot from 'lucide-svelte/icons/bot';
import Truck from 'lucide-svelte/icons/truck';
import Train from 'lucide-svelte/icons/train';
import Contact2 from 'lucide-svelte/icons/contact-2';
import Briefcase from 'lucide-svelte/icons/briefcase';
import Users from 'lucide-svelte/icons/users';
import Lightbulb from 'lucide-svelte/icons/lightbulb';
import BarChart from 'lucide-svelte/icons/bar-chart';

const icons = {
	Code2,
	FileText,
	Bot,
	Truck,
	Train,
	IdCardLanyard: Contact2,
	Briefcase,
	Users,
	Lightbulb,
	BarChart
};

export function getIcon(name: string) {
	return icons[name];
}
