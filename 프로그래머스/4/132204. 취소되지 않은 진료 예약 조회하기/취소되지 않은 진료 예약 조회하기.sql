-- 코드를 입력하세요
# SELECT DISTINCT J.APNT_NO, P.PT_NAME, J.PT_NO, J.MCDP_CD, J.DR_NAME, J.APNT_YMD, J. APNT_CNCL_YN FROM (
#     SELECT A.APNT_NO, A.PT_NO, A.MCDP_CD, A.APNT_YMD, D.DR_NAME, A.APNT_CNCL_YN FROM APPOINTMENT A JOIN DOCTOR D
#     USING(MCDP_CD)
#     WHERE MCDP_CD = 'CS'
# ) J JOIN PATIENT P
# USING(PT_NO)
# WHERE J.APNT_YMD LIKE '2022-04-13%'
# ORDER BY J.APNT_YMD ASC

SELECT A.APNT_NO, P.PT_NAME, P.PT_NO, A.MCDP_CD, D.DR_NAME, A.APNT_YMD FROM APPOINTMENT A
JOIN PATIENT P ON A.PT_NO = P.PT_NO
JOIN DOCTOR D ON A.MDDR_ID = D.DR_ID
WHERE A.APNT_YMD LIKE '2022-04-13%' AND (A.APNT_CNCL_YN = 'N' OR A.APNT_CNCL_YN IS NULL) AND A.MCDP_CD = 'CS'
ORDER BY A.APNT_YMD ASC