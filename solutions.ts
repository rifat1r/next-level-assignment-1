const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};
const processInput = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = (
  args: readonly [latitude: number, longitude: number, locationName: string],
) => {
  const [latitude, longitude, locationName] = args;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
  let combinedArr: T[] = [];
  for (const arr of arrays) {
    for (const item of arr) {
      combinedArr.push(item);
    }
  }
  return combinedArr;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (objs: Course[], minStudents: number) => {
  let newArray: Course[] = [];
  for (const obj of objs) {
    if (obj.isPublished && obj.students >= minStudents) {
      newArray.push(obj);
    }
  }
  return newArray;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((obj) => obj[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
