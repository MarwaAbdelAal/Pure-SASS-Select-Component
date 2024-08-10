import CustomSelect from "@/components/CustomSelect";
import { weekdays } from "@/data/weekdays";
import styles from "./page.module.scss";
import CustomOption from "@/components/CustomOption";

export default function Home() {
  const renderOption = (option: string) => CustomOption({ option });

  const weekdayOptions = weekdays.map((day) => ({
    key: day.key,
    component: renderOption(day.value),
  }));

  return (
    <main className={styles.main}>
      <CustomSelect options={weekdayOptions} label="Day" />
      <CustomSelect options={weekdayOptions} label="Days" multiple />
    </main>
  );
}
