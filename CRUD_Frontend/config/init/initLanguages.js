import LocalizedStrings from 'react-native-localization';

export default function initLanguages ( languages= {}):object{
	return new LocalizedStrings(languages);
}