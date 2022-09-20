 public void Merge(int[] nums1, int m, int[] nums2, int n) {     
        int idx1 = m - 1;
	    int idx2 = n - 1;
	
	for (int i = nums1.Length - 1; i >= 0; i--)
	{
		if ((idx1 >= 0) && (idx2 >= 0))
		{
			if (nums1[idx1] > nums2[idx2])
			{
				nums1[i] = nums1[idx1];
				idx1--;
			}
			else
			{
				nums1[i] = nums2[idx2];
				idx2--;
			}
		}
		else if (idx1 >= 0)
		{
			nums1[i] = nums1[idx1];
			idx1--;
		}
		else
		{
			nums1[i] = nums2[idx2];
			idx2--;
		}
    }
    }