-- 코드를 작성해주세요
SELECT B.DEPT_ID, A.DEPT_NAME_EN, ROUND(AVG(B.SAL)) AS AVG_SAL FROM HR_DEPARTMENT A JOIN HR_EMPLOYEES B
USING (DEPT_ID)
GROUP BY B.DEPT_ID, A.DEPT_NAME_EN
ORDER BY AVG_SAL DESC
