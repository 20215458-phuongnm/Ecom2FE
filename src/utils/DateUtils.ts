import dayjs from 'dayjs';

type DateFormat = 'HH:mm:ss DD/MM/YYYY' | 'DD/MM/YYYY' | 'DD/MM/YY';

class DateUtils {
  // Lấy ngày giờ hiện tại
  static now = () => dayjs().toISOString();

  //Đổi định dạng ngày giờ từ ISO sang chuỗi theo định dạng khác
  static isoDateToString = (isoDate: string, format: DateFormat = 'HH:mm:ss DD/MM/YYYY') => {
    const date = dayjs(isoDate);
    return date.isValid() ? date.format(format).toString() : isoDate;
  };

  //Đổi định dạng ngày giờ từ chuỗi sang ISO
  static toIso = (date: Date) => dayjs(date).toISOString();

  //lấy ngày giờ hiện tại theo định dạng ISO
  static today = () => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  };
}

export default DateUtils;
